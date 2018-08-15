// Random Quote Generator - Justin Duncan

// Create the array of quote objects and name it quotes
var quotes = [{
    quote: "I love you the more in that I believe you had" +
      " liked me for my own sake and for nothing else.",
    source: "John Keats",
    categorization: "love",
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


//To track quotes that have been shown and remove them from random pool
var shownQuotes = [];
// grabs copy of quotes to manipulate
var notShownQuotes = quotes;

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote() {
  if (shownQuotes.length !== 0) {
    //checks if a shown quote is in the notShownQuotes arry and removes it
    shownQuotes.forEach(function(shownQuote) {
      for (var i = 0; i < notShownQuotes.length; i++) {
        if (shownQuote.quote === notShownQuotes[i].quote) {
          notShownQuotes.splice(i, 1);
        }
      }
    })
  }
  //resets the array if all have been shown
  if (notShownQuotes.length === 0) {
    notShownQuotes = quotes;
  }
  // generates random number according to array length
  var returnVal = Math.round(Math.random() * notShownQuotes.length - 1);
  // in case returnval is an invalid number because of small array size
  if (returnVal <= 0) {
    return notShownQuotes[0];
  } else {
    return notShownQuotes[returnVal]
  }
}

// Create the printQuote funtion and name it printQuote
function printQuote() {
  var tempQuote = getRandomQuote();
  var str = '<p class="quote">' +
    ` ${tempQuote.quote}.</p>` +
    `<p class="source">${tempQuote.source}`;
  if (tempQuote.year.length !== 0) {
    str +=
      `<span class="year">${tempQuote.year}</span></p>`
  } else {
    str += '</p>'
  }
  //this portion prints to the document
  document.getElementById('quote-box').innerHTML = str;
  //change background color
  document.body.style.backgroundColor = ran3Color();
  //change button as well :)
  document.getElementById('loadQuote').style.backgroundColor = ran3Color();
  //clears timer
  clearInterval(timer);
  // resets timer
  timer = setInterval(printQuote, 5000);
}
//random color generator
function ran3Color(){
  var r = Math.round(Math.random() * 360);
  var g = Math.round(Math.random() * 360);
  var b = Math.round(Math.random() * 360);
  return `rgb(${r},${g},${b})`;
}

//set interval for timer
var timer = setInterval(printQuote, 5000);

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
