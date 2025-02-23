import { useState, useRef, useEffect } from 'react'
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { Random } from 'random-js';
import stockfish from "stockfish.js";

const random = new Random()


const openings_fen = { 
     random: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
     italian: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
     sicilian: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2',
     french: 'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3',
     caro: 'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3'
};


  function updateMinELO(newELO, setMinELO) {
    if (newELO <= 2500 && newELO >= 0) {
    setMinELO(newELO)
    }
  }

  async function loadRandomPosition(setGame, opening, minELO, allowDrop, needFetchInfo, masterMove0, masterMove1, masterMove2, normieMove0, normieMove1, normieMove2, yourMove, prevFEN) {
    // re-set move text before re-render
    masterMove0.current = "";
    masterMove1.current = "";
    masterMove2.current = "";
    normieMove0.current = "";
    normieMove1.current = "";
    normieMove2.current = "";
    yourMove.current = ""

    // re-render current opening before displaying new position
    setGame(new Chess(openings_fen[opening.current]))

    // get random numbers of moves to go ahead
    let numMoves = random.integer(1, 7)
    console.log("Num random moves: " + numMoves)
    
    let position_fen = openings_fen[opening.current]
    
    // loop through numMoves times, grabbing the most popular moves, choosing a random one, and playing it
    for (let i = 0; i < numMoves; i++) {
      // const response = await fetch(`/lichess/masters?fen=${openings_fen[opening]}`).catch(error => {console.log("INVALID DATA2")})
      const response = await fetch(`/lichess/lichess?fen=${position_fen}&ratings=${minELO}`).catch(error => {console.log("INVALID DATA2")})
      const data =  await response.json()
      let moveNum = random.integer(0, data.moves.length - 1)
      console.log("Random move to choose: " + moveNum)
      
      console.log(data)
      console.log(data.moves[moveNum].uci)
      let board = new Chess(position_fen) 
      board.move({
        from: data.moves[moveNum].uci.substring(0, 2),
        to: data.moves[moveNum].uci.substring(2, 4),
      })
      position_fen = board.fen()
      // TODO: DO WE WANT TO TRY TO ANIMATE OUT MOVES? WASN"T SMOOTH PREVIOUSLY AS TWAS A LOT OF RENDERING!!!
      // setGame(new Chess(position_fen))

    }
    
    // re-render
    setGame(new Chess(position_fen))
    
    // after re-render, grab info for best moves on the board
    prevFEN.current = position_fen
    allowDrop.current = true;
    const localFEN = prevFEN.current
    const response = await fetch(`/lichess/masters?fen=${localFEN}`).catch(error => {console.log("INVALID DATA2")})
    // const response = await fetch(`/lichess/lichess?fen=${game.fen()}&ratings=2200`).catch(error => {console.log("INVALID DATA2")})
    const data =  await response.json()
    console.log("Opening: " + opening.current);
    console.log("FEN: " + prevFEN.current);
    console.log(data.moves[0])
    console.log(data.moves[1])
    console.log(data.moves[2])
    masterMove0.current = data.moves[0] != undefined ? data.moves[0].uci : "No move found";
    masterMove1.current = data.moves[1] != undefined ? data.moves[1].uci : "No move found";
    masterMove2.current = data.moves[2] != undefined ? data.moves[2].uci : "No move found";
    
    // GRAB NORMIE MOVES
    const response2 = await fetch(`/lichess/lichess?fen=${localFEN}&ratings=${minELO}`).catch(error => {console.log("INVALID DATA2")})
    const data2 =  await response2.json()
    console.log(data2.moves[0])
    console.log(data2.moves[1])
    console.log(data2.moves[2])
    normieMove0.current = data2.moves[0] != undefined ? data2.moves[0].uci : "No move found";
    normieMove1.current = data2.moves[1] != undefined ? data2.moves[1].uci : "No move found";
    normieMove2.current = data2.moves[2] != undefined ? data2.moves[2].uci : "No move found";

    // GRAB ENGINE BEST MOVES
    const move = await getBestMove(localFEN);
    console.log("BEST MOVE: ", move);

  }

function getBestMove(fen, depth = 15) {
  return new Promise((resolve) => {
    const stockfish = new Worker(new URL("stockfish.js", import.meta.url), {
    type: "module",
    });
    
    stockfish.postMessage("uci");
    stockfish.postMessage("isready");
    stockfish.postMessage("setoption name MultiPV value 3");
    
    stockfish.onmessage = (event) => {
      console.log(event.data);
      if (event.data.startsWith("bestmove")) {
        const move = event.data.split(" ")[1];
        resolve(move);
        stockfish.terminate();
      }
    };
    stockfish.postMessage(`position fen ${fen}`)
    stockfish.postMessage(`go depth ${depth}`)
  });
}


function App() {
// change 
// Initialize the game state with a new Chess instance
const [game, setGame] = useState(new Chess());
const [minELO, setMinELO] = useState("1800");
const opening = useRef("random");
const allowDrop = useRef(false);
const needFetchInfo = useRef(false);
const prevFEN = useRef(game.fen());
const masterMove0 = useRef("");
const masterMove1 = useRef("");
const masterMove2 = useRef("");
const normieMove0 = useRef("");
const normieMove1 = useRef("");
const normieMove2 = useRef("");
const yourMove = useRef("");

// Define the onDrop function
function onDrop(sourceSquare, targetSquare) {
  try {
    // Check if the move is legal
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });
      // If the move is illegal, return false to revert
      if (move === null) return false;

      // update yourMove before re-render
      yourMove.current = move.san;
      // Update the game state
      setGame(new Chess(game.fen()));
      allowDrop.current = false;
      return true;
    } catch (error) {
      console.error("Error in onDrop:", error);
      return false;
    }
  }
  

  function displayOpening(new_opening, opening, setGame, allowDrag) {
    // TODO: ADD IN RESET FOR MOVES INFO HERE, so that when reset !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // re-set move text before re-render
    masterMove0.current = "";
    masterMove1.current = "";
    masterMove2.current = "";
    normieMove0.current = "";
    normieMove1.current = "";
    normieMove2.current = "";
    yourMove.current = "";

    opening.current = new_opening;
    // Update the game state
    console.log(opening.current)
    console.log(openings_fen[opening.current])

    allowDrag.current = false
    setGame(new Chess(openings_fen[new_opening]));
  }
  
  return (
  <div className="container mx-auto p-4">
    {/* Mobile: stacked, Desktop: side-by-side */}
    <div className="flex flex-col md:flex-row gap-4">
      {/* Chess board */}
      <div className="w-full md:w-2/3">
        <Chessboard position={game.fen()} onPieceDrop={onDrop} arePiecesDraggable={allowDrop.current} animationDuration={300}/>

        {/* Controls & Info */}
        <div className="w-full">
          <div className="bg-gray-100 p-4 rounded">
            <h2>Please Select an Opening to Study</h2>
            <select onChange={(e) => displayOpening(e.target.value, opening, setGame, allowDrop)}>
              <option value="random">Random</option>
              <option value="italian">Italian Game</option>
              <option value="sicilian">Sicilian Defense</option>
              <option value="french">French Defense</option>
              <option value="caro">Caro Kann</option>
            </select>
              <h2>ELO Rating Input</h2>
                  <div>
                    <label htmlFor="eloInput">Enter ELO Rating (0-2500):</label>
                    <input
                      id="eloInput"
                      type="number"
                      min="0"
                      max="2500"
                      value={minELO}
                      onChange={(e) => updateMinELO(e.target.value, setMinELO)}
                    />
                  </div>
            <button onClick={() => loadRandomPosition(setGame, opening, minELO, allowDrop, needFetchInfo, masterMove0, masterMove1, masterMove2, normieMove0, normieMove1, normieMove2, yourMove, prevFEN)}>Next Position</button>
          </div>
        </div>
      </div>
        <div className="w-full md:w-1/3">
          <div className="bg-cream-100 p-4 rounded">
            <h2 className="text-xl font-bold mb-4">Move Analysis</h2> 
              <h3 className="text-l font-bold mb-4">Your Move: {yourMove.current}</h3> 
              <h3 className="text-l font-bold mb-4">Popular Master Moves</h3> 
              <p>Master Move 0:{masterMove0.current}</p>
              <p>Master Move 1:{masterMove1.current}</p>
              <p>Master Move 2:{masterMove2.current}</p>
              <h3 className="text-l font-bold mb-4">Popular Moves over {minELO}</h3> 
              <p>Move 0:{normieMove0.current}</p>
              <p>Move 1:{normieMove1.current}</p>
              <p>Move 2:{normieMove2.current}</p>
          </div>
        </div>
    </div>
  </div>
  )
}

export default App
