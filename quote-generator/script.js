const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const categorySelect = document.getElementById("category");

const quotes = [
  {
    text: "Push yourself, because no one else will.",
    author: "Unknown",
    category: "motivation",
  },
  {
    text: "Success is not final; failure is not fatal.",
    author: "Winston Churchill",
    category: "success",
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan",
    category: "motivation",
  },
  {
    text: "Do what you can, with what you have.",
    author: "Theodore Roosevelt",
    category: "life",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    category: "success",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "motivation",
  },
  {
    text: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey",
    category: "wisdom",
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
    category: "life",
  },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
    category: "motivation",
  },
  {
    text: "Quality is not an act, it is a habit.",
    author: "Aristotle",
    category: "wisdom",
  },
  {
    text: "Act as if what you do makes a difference.",
    author: "William James",
    category: "life",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
    category: "success",
  },
  {
    text: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem",
    category: "motivation",
  },
  {
    text: "The best way out is always through.",
    author: "Robert Frost",
    category: "life",
  },
  {
    text: "If opportunity doesn’t knock, build a door.",
    author: "Milton Berle",
    category: "success",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
    category: "wisdom",
  },
  {
    text: "Great things never come from comfort zones.",
    author: "Unknown",
    category: "motivation",
  },
  {
    text: "Happiness depends upon ourselves.",
    author: "Aristotle",
    category: "life",
  },
  {
    text: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
    category: "success",
  },
  {
    text: "Knowledge speaks, but wisdom listens.",
    author: "Jimi Hendrix",
    category: "wisdom",
  },
];

function generateQuote() {
  const selected = categorySelect.value;

  const filtered =
    selected === "all" ? quotes : quotes.filter((q) => q.category === selected);

  const randomIndex = Math.floor(Math.random() * filtered.length);
  const randomQuote = filtered[randomIndex];

  quoteText.style.opacity = 0;
  authorText.style.opacity = 0;

  setTimeout(() => {
    quoteText.textContent = `"${randomQuote.text}"`;
    authorText.textContent = `— ${randomQuote.author}`;
    quoteText.style.opacity = 1;
    authorText.style.opacity = 1;
  }, 200);
}

function copyQuote() {
  const fullQuote = `${quoteText.textContent} ${authorText.textContent}`;
  navigator.clipboard.writeText(fullQuote);
}

generateBtn.addEventListener("click", generateQuote);
copyBtn.addEventListener("click", copyQuote);
