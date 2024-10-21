const container = document.querySelector(".container");
const new_btn = document.querySelector(".new_btn");
const dialog = document.querySelector("dialog");

// an array to hold the book objects
const myLibrary = [];

function Book(name, author) { 
  this.name = name;
  this.author = author;
}

function addBookToLibrary() {
  // function to take user input and add them to the myLibrary array.

}

new_btn.addEventListener("click", () => {
  // needs to load the form for input
  dialog.showModal();
});
