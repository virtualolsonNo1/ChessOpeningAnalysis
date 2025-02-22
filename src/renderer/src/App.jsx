import { useState, useRef, useEffect } from 'react'
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { Random } from 'random-js';

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

  async function loadRandomPosition(setGame, opening, minELO, allowDrop) {
    let numMoves = random.integer(1, 7)
    console.log("Num random moves: " + numMoves)
    let year = random.integer(1980, 2024)
    let month = random.integer(0, 12)
    
    let position_fen = openings_fen[opening.current]
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
      setGame(new Chess(position_fen))

    }
    
    allowDrop.current = true
    setGame(new Chess(position_fen))

    // year = 2016
    // month = 12
    // fetch(`/lichess/lichess?fen=${openings_fen[opening]}&ratings=2200`).then(response => response.json()).then(data => {
    //   //TODO: ADD DATA UPDATING BOARD HERE!!!!!!!!!!!
    //   console.log(data);
    //   console.log(data.moves.length)
    // }).catch(error => {console.log("INVALID DATA2")})
  }


function App() {
// change 
// Initialize the game state with a new Chess instance
const [game, setGame] = useState(new Chess());
const [feedback, setFeedback] = useState("Find the best move in this position");
const [minELO, setMinELO] = useState("1800");
const opening = useRef("random");
const allowDrop = useRef(false);
const needFetchInfo = useRef(false);
const prevFEN = useRef(game.fen())

async function fetchInfo() {
  const localFEN = prevFEN.current
  const response = await fetch(`/lichess/masters?fen=${localFEN}`).catch(error => {console.log("INVALID DATA2")})
  // const response = await fetch(`/lichess/lichess?fen=${game.fen()}&ratings=2200`).catch(error => {console.log("INVALID DATA2")})
  const data =  await response.json()
  console.log(data.moves[0])
  console.log(data.moves[1])
  console.log(data.moves[2])
  
  // TODO: trigger all these BEFORE onDrop, probably by moving where needFetchInfo is changed to true
  if (data.moves[0] == undefined && data.moves[2] == undefined && data.moves[3] == undefined) {
    const response = await fetch(`/lichess/lichess?fen=${localFEN}&ratings=${minELO}`).catch(error => {console.log("INVALID DATA2")})
    const data =  await response.json()
    console.log(data.moves[0])
    console.log(data.moves[1])
    console.log(data.moves[2])
    
  }
}
  
const fetchPositionInfo = useEffect(() => {
  if (needFetchInfo.current) {
    fetchInfo();
    needFetchInfo.current = false;
  }

}, [allowDrop.current])

// Define the onDrop function
function onDrop(sourceSquare, targetSquare) {
  prevFEN.current = game.fen()
  try {
    // Check if the move is legal
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });
      // If the move is illegal, return false to revert
      if (move === null) return false;

      // Update the game state
      needFetchInfo.current = true;
      setGame(new Chess(game.fen()));
      allowDrop.current = false;
      return true;
    } catch (error) {
      console.error("Error in onDrop:", error);
      return false;
    }
  }
  

  function displayOpening(new_opening, opening, setGame, allowDrag) {
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
          <h2>Position Information</h2>
          <p>{feedback}</p>
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
          <button onClick={() => loadRandomPosition(setGame, opening, minELO, allowDrop)}>Next Position</button>
        </div>
      </div>
      
      </div>
    </div>
  </div>
  )
}

export default App
