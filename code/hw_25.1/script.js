document.addEventListener('DOMContentLoaded', () => {
  const emojis = document.querySelectorAll('.emoji');
  const showResultsBtn = document.getElementById('show-results');
  const clearResultsBtn = document.getElementById('clear-results');
  const resultsSection = document.getElementById('results');
  const winnerEmojiEl = document.getElementById('winner-emoji');
  const winnerVotesEl = document.getElementById('winner-votes');

  let votes = {};

  function loadVotes() {
    const storedVotes = localStorage.getItem('emojiVotes');
    if (storedVotes) {
      votes = JSON.parse(storedVotes);
      updateVoteCounts();
    }
  }

  function saveVotes() {
    localStorage.setItem('emojiVotes', JSON.stringify(votes));
  }

  function updateVoteCounts() {
    document.querySelectorAll('.vote-count').forEach(countEl => {
      const emojiId = countEl.dataset.count;
      countEl.textContent = votes[emojiId] || 0;
    });
  }

  emojis.forEach(emoji => {
    const emojiId = emoji.dataset.emoji;
    if (!votes[emojiId]) {
      votes[emojiId] = 0;
    }

    emoji.addEventListener('click', () => {
      votes[emojiId]++;
      saveVotes();
      updateVoteCounts();
    });
  });

  showResultsBtn.addEventListener('click', () => {
    let winner = null;
    let maxVotes = 0;

    for (const emojiId in votes) {
      if (votes[emojiId] > maxVotes) {
        maxVotes = votes[emojiId];
        winner = emojiId;
      }
    }

    if (winner) {
      const winnerEmoji = document.querySelector(`.emoji[data-emoji="${winner}"]`).textContent;
      winnerEmojiEl.textContent = winnerEmoji;
      winnerVotesEl.textContent = maxVotes;
      resultsSection.classList.remove('hidden');
    } else {
      alert('Голосів ще немає. Голосуйте!');
    }
  });

  clearResultsBtn.addEventListener('click', () => {
    localStorage.removeItem('emojiVotes');
    votes = {};
    updateVoteCounts();
    resultsSection.classList.add('hidden');
  });

  loadVotes();
});