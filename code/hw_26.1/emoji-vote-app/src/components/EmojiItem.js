import React from 'react';

function EmojiItem({ emoji, votes, onVote }) {
  return (
    <div className="emoji-item" onClick={onVote}>
      <span className="emoji">{emoji}</span>
      <span className="vote-count">{votes}</span>
    </div>
  );
}

export default EmojiItem;