const container = document.querySelector(".container");
const new_btn = document.querySelector(".new_btn");
const dialog = document.querySelector("dialog");
const close = document.querySelector(".close");

// an array to hold the book objects
const myLibrary = [];

function Book(name, author) { 
  this.name = name;
  this.author = author;
}



function addBookToLibrary(book) {
  // function to take user input and add them to the myLibrary array.
  myLibrary.push(book);
}

new_btn.addEventListener("click", () => {
  // needs to load the form for input
  dialog.showModal();
});

close.addEventListener("click", () => {
  dialog.close();
})

book_1 = new Book("a", "b");
addBookToLibrary(book_1);

console.log(myLibrary);

myLibrary.forEach(book => {
  let writer = document.createElement("div");
  let book_name = document.createElement("div");
  
  writer.textContent = "Author: " + book.author;
  book_name.textContent = "Title: " + book.name ;

  let newbook = document.createElement("div");

  newbook.appendChild(book_name);
  newbook.appendChild(writer);
  
  container.appendChild(newbook); 
});