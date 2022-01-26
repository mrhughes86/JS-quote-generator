const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Generate New Quote
function newQuote() {
  // pick random quote
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // check if Author field is blank and replace with "Unknown".
  if (!quote.author){
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }

  // Check Quote Length

  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  quoteText.textContent = quote.text;
}

// Get quotes from API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  }catch (error) {

  }
}
// On Load
getQuotes()