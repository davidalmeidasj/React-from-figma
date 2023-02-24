const buttonContainer = document.querySelector(".btn-group-vertical");
buttonContainer.classList.remove("btn-group-vertical");
buttonContainer.classList.add("btn-group");

const jumbotronDiv = document.querySelector(".jumbotron");
jumbotronDiv.classList.add("text-right");

function invertColors() {
  jumbotronDiv.classList.toggle("bg-secondary");
  jumbotronDiv.classList.toggle("text-white");
}

// Call the function to invert colors on click of a button or any other event
invertColors();


const linkA = document.querySelector(".jumbotron > a");

linkA.classList.toggle("btn-success");

const secondCardButton = document.querySelectorAll('.card')[1].querySelector('a');
secondCardButton.classList.remove('btn-primary');
secondCardButton.classList.add('btn-success');



// get the list group element
const listGroup = document.querySelector('.list-group');

// create two new list items
const fourthItem = document.createElement('li');
fourthItem.classList.add('list-group-item');
fourthItem.textContent = 'Quarto item';

const fifthItem = document.createElement('li');
fifthItem.classList.add('list-group-item');
fifthItem.textContent = 'Quinto item';

// insert the new items after the third item
const thirdItem = listGroup.children[2];
listGroup.insertBefore(fifthItem, thirdItem.nextSibling);
listGroup.insertBefore(fourthItem, thirdItem.nextSibling);

// remove the active class from the first item and add it to the fourth item
const firstItem = listGroup.children[0];
firstItem.classList.remove('active');
fourthItem.classList.add('active');
