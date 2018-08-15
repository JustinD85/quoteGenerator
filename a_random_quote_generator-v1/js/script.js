// Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [{
    quote: "I love you the more in that I believe you had" +
      " liked me for my own sake and for nothing else.",
    source: "John Keats",
    categorization:  "love",
    year: ""
  },
  {
    quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
    source: "Ernest Hemingway",
    categorization: "philosophy",
    year: ""
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    source: "Franklin D. Roosevelt",
    categorization: "motivation",
    year: ""
  },
  {
    quote: "There is nothing permanent except change.",
    source: "Heraclitus",
    categorization: "philosophy",
    year: ""

  },
  {
    quote: "You cannot shake hands with a clenched fist",
    source: "Indira Gandhi",
    categorization: "philosophy",
    year: "1971"
  },
  {
    quote: "Learning never exhausts the mind",
    source: " Leonardo da Vinci",
    categorization: "philosophy",
    year: ""
  },
  {
    quote: "There is no charm equal to tenderness of heart.",
    source: "Jane Austen",
    categorization: "motivation",
    year: ""
  },
];


// Create the getRandomQuote function and name it getRandomQuote
var picked = [];
var quoteArr = quotes;

function getRandomQuote() {
  //filter out quotes already shown
  if (picked.length !== 0) {
    picked.forEach(function(i) {
      for (var j = 0; j < quoteArr.length; j++) {
        if (i.quote === quoteArr[j].quote) {
          quoteArr.splice(j, 1);
        }
      }
    })
  }

  if (quoteArr.length === 0) {
    quoteArr = quotes;
  }

  var returnVal = Math.round(Math.random() * quoteArr.length - 1);
  if (returnVal <= 0) {
    return quoteArr[0];
  } else {
    return quoteArr[returnVal]
  }
}

// Create the printQuote funtion and name it printQuote
function printQuote() {
  var tempQuote = getRandomQuote();
  var str = '<p class="quote">' +
    ` ${tempQuote.quote}.</p>` +
    `<p class="source">${tempQuote.source}` ;
    if(tempQuote.year.length !== 0){
      str +=
      `<span class="year">${tempQuote.year}</span></p>`
    }else{
      str += '</p>'
    }

  document.getElementById('quote-box').innerHTML = str;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
