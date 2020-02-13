import React from 'react';
import './game-state-modal.css';

// gamestates are 'won', 'lost', 'playing'
const GameStateModal = ({gameState, keepPlaying, playLater}) => {
  return (
    <div className="game-state-modal">
      {
        gameState === 'lost' ? 
        <>
          <div>You lost :( </div>
          <div>Keep practicing!</div>
          <button className="continue" onClick={() => keepPlaying()}>Again!</button>
          <button className="stop" onClick={() => playLater()}>Next time</button>
        </> : 
        <>
          <div>You won!</div>
          <div>Congrats!</div>
          <button className="continue" onClick={() => keepPlaying()}>Again!</button>
          <button className="stop" onClick={() => playLater()}>Back</button>
        </>
      }
    </div>
  );
}

export default GameStateModal;