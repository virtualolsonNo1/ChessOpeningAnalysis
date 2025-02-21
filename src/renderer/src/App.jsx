import { useState } from 'react'
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';



const openings = { 
     random: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
     italian: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
     sicilian: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2',
     french: 'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3',
     caro: 'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3'
};

function App() {
  // Initialize the game state with a new Chess instance
  const [game, setGame] = useState(new Chess());
  const [feedback, setFeedback] = useState("Find the best move in this position");
  
  // Define the onDrop function
  function onDrop(sourceSquare, targetSquare) {
    try {
      // Check if the move is legal
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q', // always promote to queen for simplicity
      });

      // If the move is illegal, return false to revert
      if (move === null) return false;

      // Update the game state
      setGame(new Chess(game.fen()));
      return true;
    } catch (error) {
      console.error("Error in onDrop:", error);
      return false;
    }
  }
  
  function loadRandomPosition(opening) {
  }
  
  function displayOpening(opening) {
    // Update the game state
    console.log(opening)
    console.log(openings[opening])

    setGame(new Chess(openings[opening]));
  }

  return (
  <div className="container mx-auto p-4">
    {/* Mobile: stacked, Desktop: side-by-side */}
    <div className="flex flex-col md:flex-row gap-4">
      {/* Chess board */}
      <div className="w-full md:w-2/3">
        <Chessboard position={game.fen()} onPieceDrop={onDrop} />

      {/* Controls & Info */}
      <div className="w-full">
        <div className="bg-gray-100 p-4 rounded">
          <h2>Position Information</h2>
          <p>{feedback}</p>
          <select onChange={(e) => displayOpening(e.target.value)}>
            <option value="random">Random</option>
            <option value="italian">Italian Game</option>
            <option value="sicilian">Sicilian Defense</option>
            <option value="french">French Defense</option>
            <option value="caro">Caro Kann</option>
          </select>
          <button onClick={loadRandomPosition}>Next Position</button>
        </div>
      </div>
      
      </div>
    </div>
  </div>
  )
}

export default App
