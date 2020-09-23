let pennies = 1;
const output = document.querySelector("output");

/*
Task 1 - A function called on click

With in the function...

👉 double the the value of the the pennies variable.

👉 update the innerText of the output tag to be ${pennies} pennies.
*/
function handleClick() {
  console.log("Im just to prove it's working!");
  pennies *= 2;
  output.innerText = `${pennies} pennies`;
}

/*
Task 2 - selecting and changing text
This does not need to be in a function

👉 Select the element with a class of .quote and store in a variable.

👉 Change its innerText to a funny quote of your choosing.
*/
let quote = document.querySelector(".quote");
quote.innerText = "Source: dude, trust me.";

/*
Task 3 - selecting and changing style
This does not need to be in a function

👉 Select the h1 tag using querySelector and store in variable.

👉 Change its text-decoration property to the value of underline.
*/
let h1 = document.querySelector("h1");
h1.style.textDecoration = "underline";

/*
Task 4 - creating elements
This does not need to be in a function

There is a list of extra tips to be added to the unordered list with the id of #tips-list

👉 Select the tips list

👉 Use a for loop to loop through the array of tips

👉 for each tip...

create an li element
set the innerText of the li element to be the current tip
append the newly created element as a child of the ul
*/

const tipsList = document.querySelector("#tips-list");

let extraTips = [
  "Keep your pennies is a glass jar",
  "Save money buy not eating!",
  "Don't let your partner know...",
];

for (const tip of extraTips) {
  const li = document.createElement("li");
  li.innerText = tip;
  tipsList.appendChild(li);
}

/*
Task 5
This does not need to be in a function. yet...

Not all aspects of the page need to accessed with querySelector, some have shortcuts on the document object.

👉 Change the title property of the document by assigning it a new value.
*/
document.title = "New interesting title";

/*
Task 6
👉 Put the code from Task 5 in a function.

👉 Have that function called on the click of the button with id #click-me
*/

{
  const button = document.querySelectorAll("button")[1];
  button.id = "click-me";

  button.addEventListener("click", () => {
    document.title = "Newer, more interesting title";
  });
}

/*
Task 7
👉 Add an input field, and a new button to the html.

👉 Write a function that sets the h1's innerText to be whatever is in the input field.
*/

{
  const input = document.createElement("input");
  const button = document.createElement("button");
  button.innerText = "Change h1";

  button.addEventListener("click", () => {
    const h1 = document.querySelector("h1");
    h1.innerText = input.value;
  });

  document.body.append(input, button);
}

/*
Task 8
👉 Go Nuts! See what else you can do, use your imagination, combine with what you've learnt in the last couple of days! 🤯.
*/
{
  for (const t of ["a", "b", "c", "d", "e"]) {
    const p = document.createElement("p");
    p.id = t;
    p.innerText = `Paragraph with an ID of ${t}`;
    document.body.appendChild(p);
  }
}
