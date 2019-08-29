/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


//Array of quote objects to hold quotes, sources, citations, years, and tags

var quotes = [
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
    tag: "self-improvement",
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



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote variable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote(){
  var random = getRandomQuote();
  var message = '';

  message += '<p class="quote">' + random.quote + '</p>'
  message += '<p class="source">' + random.source
  if (random.citation){
    message += '<span class="citation">' + random.citation + '</span>';
  }
  if (random.year){
    message += '<span class="year">' + random.year + '</span>';
  }
  if (random.tag){
    message += '<span class="tag">' + "<br>" + '~' + random.tag + '</span>';
  }
    
    message += '</p>';

    console.log(message);

    document.getElementById('quote-box').innerHTML = message;
} 


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false); /*Invokes the 'printQuote' function*/


// Remember to delete the comments that came with this file, and replace them with your own code comments.