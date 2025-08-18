
  const quotes = [
    "Not all those who wander are lost. — J.R.R. Tolkien",
    "The journey of a thousand miles begins with a single step.",
    "Adventure is worthwhile. — Aesop",
    "Nature does not hurry, yet everything is accomplished. — Lao Tzu",
    "Wilderness is not a luxury but a necessity of the human spirit. — Edward Abbey",
    "Go outside. Breathe. Let your soul grow wild.",
    "In every walk with nature, one receives far more than he seeks. — John Muir"
  ];

  function generateQuote() {
    const quoteEl = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = quotes[randomIndex];
  }

 
  window.onload = generateQuote;

