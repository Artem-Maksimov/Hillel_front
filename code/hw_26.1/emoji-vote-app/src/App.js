import React, { useState, useEffect } from 'react';
import EmojiItem from './components/EmojiItem';
import './index.css';

const emojisList = ['😀', '😉', '😎', '🤩', '😍'];

function App() {
  const [votes, setVotes] = useState(() => {
    const storedVotes = localStorage.getItem('emojiVotes');
    if (storedVotes) {
      return JSON.parse(storedVotes);
    }
    const initialVotes = {};
    emojisList.forEach(emoji => {
      initialVotes[emoji] = 0;
    });
    return initialVotes;
  });

  const [winner, setWinner] = useState(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    localStorage.setItem('emojiVotes', JSON.stringify(votes));
  }, [votes]);

  const handleVote = (emoji) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [emoji]: (prevVotes[emoji] || 0) + 1
    }));
  };

  const showResultsHandler = () => {
    let winningEmoji = null;
    let maxVotes = 0;

    for (const emoji in votes) {
      if (votes[emoji] > maxVotes) {
        maxVotes = votes[emoji];
        winningEmoji = emoji;
      }
    }

    if (winningEmoji && maxVotes > 0) {
      setWinner({ emoji: winningEmoji, votes: maxVotes });
      setShowResults(true);
    } else {
      alert('Голосів ще немає. Голосуйте!');
      setShowResults(false);
    }
  };

  const clearResultsHandler = () => {
    const clearedVotes = {};
    emojisList.forEach(emoji => {
      clearedVotes[emoji] = 0;
    });
    setVotes(clearedVotes);
    setWinner(null);
    setShowResults(false);
  };

  return (
    <div className="container">
      <h1>Голосування за найкращий смайлик</h1>
      <div className="emojis-container">
        {emojisList.map(emoji => (
          <EmojiItem
            key={emoji}
            emoji={emoji}
            votes={votes[emoji]}
            onVote={() => handleVote(emoji)}
          />
        ))}
      </div>
      <div className="button-group">
        <button className="show-btn" onClick={showResultsHandler}>Show Results</button>
        <button className="clear-btn" onClick={clearResultsHandler}>Очистити результати</button>
      </div>

      <div className={`results-section ${showResults ? '' : 'hidden'}`}>
        <h2>Результати голосування:</h2>
        {winner && (
          <div>
            <p>Переможець:</p>
            <span className="winner-emoji">{winner.emoji}</span>
            <p>Кількість голосів: <span id="winner-votes">{winner.votes}</span></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;