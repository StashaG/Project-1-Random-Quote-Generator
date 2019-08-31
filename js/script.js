/******************************************
 A Random Quote Generator
******************************************/

var quotes = [ //Array of quote objects to hold quotes, sources, citations, years, and tags
  { 
    quote: "But success is not the absence of failure, it's the persistence through failure.",
    source: "Mattie James",
    citation: "Mattie Minute Newsletter",
    year: "2019",  
    tag: "business",
  },
  {
    quote: "All businesses are about relationships and the tech industry is no different.",
    source: "Ruben Harris",
    citation: "Medium",
    year: "2016",
    tag: "business", 
  },
  {
    quote: "I promise you somebody took that same situation you're in right now and bodied it. Find a solution.",
    source: "Ruben Harris",
    citation: "Twitter",
    year: "2019", 
    tag: "business/self-improvement",
  },
  {
    quote: "Coding is easier when you do it with a community of people who are just as passionate about coding as you.",
    source: "Saron Yitbarek",
    citation: "Founder of CodeNewbie",
    tag: "tech",
  },
  {
    quote: "The best jobs aren't publicly listed. You have to dig for them, invent them, " 
    + "or convince someone it's worth creating just for you.",
    source: "Sahil Lavingia",
    citation: "Twitter",
    year: "2019",
    tag: "job search advice",
  }
  ];

  console.log(quotes);


/*Function to generate a random number, use it to get a random quote object and return a random quote*/

function getRandomQuote() {
  var randomNum = Math.floor( Math.random() * quotes.length);
  
  return quotes[randomNum];
}

console.log(getRandomQuote());


function printQuote(){ //print function calls the `getRandomQuote` function and assigns it to a variable.
  var random = getRandomQuote();
  var message = ''; //message variable set to an empty string

  message += '<p class="quote">' + random.quote + '</p>'//adds the quote from the array to the HTML string
  message += '<p class="source">' + random.source //adds the source from the array to the HTML string
  if (random.citation){ //if statement checks for the citation property before adding it to the HTML string
    message += '<span class="citation">' + random.citation + '</span>';
  }
  if (random.year){ //if statement checks for the year property before adding it to the HTML string
    message += '<span class="year">' + random.year + '</span>';
  }
  if (random.tag){ //if statement checks for the year tag before adding it to the HTML string
    message += '<span class="tag">' + "<br></br>" + 'tags: ' + random.tag + '</span>';
  }
    
    message += '</p>';

    console.log(message);
    
    document.getElementById('quote-box').innerHTML = message;//changes the HTML applied to the quote-box id in the HTML element
} 

/*When you click the "Show another quote" button, the event listener 
  below is triggered, and it calls the `printQuote` function.*/

document.getElementById('loadQuote').addEventListener("click", printQuote, false); /*Invokes the 'printQuote' function*/

