import { useState } from 'react'
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

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
          <button /*onClick={loadRandomPosition}*/>Next Position</button>
        </div>
      </div>
      
      </div>
    </div>
  </div>
  )
}

export default App
