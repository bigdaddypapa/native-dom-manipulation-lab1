let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function() {
  // Do all of your work inside the document.addEventListener  
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  
   // Part 8
 // When you reload the page, the `script.js` file loads a random DOM quote. Let's play with the included function:
// Query select the `#quote-title` ID element and add a **click** event handler. 
//That event handler should use the function `randomQuote` whenever `#quote-title` is click
// Random quote of the day generator

  document.getElementById("quote-title").onclick = function(){
    randomQuote()
  }
  randomQuote();
  // Part 1
  //DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the `#main-title` ID element.
  // Remember there are a couple of ways to query **id**. Change the **text** of the title to something shorter.

  const newTitle = document.querySelector("#main-title");
  newTitle.textContent = " DOM PLAYGROUND"

  // Part 2
  //Select the `body` and change the background-color to a new color of your choice.

  document.body.style.backgroundColor = "white"

  // Part 3
  //Select **DOM's Favorite Things** list and remove the last list item.

  let favoriteThings = document.getElementById("favorite-things");
        favoriteThings.removeChild(favoriteThings.lastElementChild);

  // Part 4
  //Select all `.special-title` class elements and change their `font-size` to `2rem`.
  //Remember you might have to iterate through the list of elements
  
  let specialTitle = document.querySelectorAll(".special-title");

  for (let i = 0; i < specialTitle.length; i++) {
    specialTitle[i].style.fontSize = "2em";
  }

  // Part 5
  //Turns out DOM never raced in **Chicago**. Access the **Past Races** list and remove **Chicago**.
  
    const list = document.getElementById("past-races");
    if (list.hasChildNodes()) {
      list.removeChild(list.children[3]);
    }
  
  
  // Part 6
  //Let's add to DOM's **Past Races** list. Create a new `<li>` element, 
  //change the new `<li>` text to the name of a city, and append it to the **Past Races** list.
 
  let newCity= document.querySelector("#past-races");
  let li = document.createElement("li");
  li.textContent = "Miami";
  newCity.append(li);

  // Part 7
 // Create a new `.blog-post` corresponding to the new city added in **Part 6**.
 // You will have to create a new `<div>` with class of `.blog-post`, a new `<h2>` with text, and a new `<p>` with some text. 
 //Think about what order you want to create the elements, and what order you want to append them in.

 function createNewBlogPost() {
  let newDiv = document.createElement('div');
  newDiv.className = 'blog-post purple';
  let newHeader = document.createElement('h1');
  newHeader.innerText = 'Miami';
  let newP = document.createElement('h2');
  newP.innerText =
    'MY SISTER GOT MARRIED TO PAUL WALKER ';
  newDiv.append(newHeader);
  newDiv.append(newP);
  document
    .getElementById('dom-adventures')
    .insertAdjacentElement('afterend', newDiv);
}
createNewBlogPost();
});


  // Part 9
  //Select all `.blog-post` class elements. Iterate through the list of `.blog-post` class elements and apply two event handlers to each node. 
  //The first event handler should be listening for `mouseout` events while the second handler should be listening for `mouseenter` events.
 // - The `mouseout` handler should toggle the class `.purple`
 // - The `mouseenter` handler should toggle the class `.red`
  
  //Test it out!
  
  //> Hint:
  
  //> Remember the document node property `.classList` and the document node method `.toggle()`.
  

  document.querySelectorAll('.blog-post purple').forEach(item => {
    item.addEventListener('mouseenter', event => {
      event.target.style.color = "red"
    })
  })
  document.querySelectorAll('.blog-post purple').forEach(item => {
    item.addEventListener('mouseout', event => {
      event.target.style.color = "purple"
    })
  })
// could'nt figure this part out yet