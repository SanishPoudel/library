const container = document.querySelector(".container");
const new_btn = document.querySelector(".new_btn");
const dialog = document.querySelector("dialog");
const close = document.querySelector(".close");
const submit = document.querySelector(".submit");
const book_title = document.querySelector("#name_of_book");
const author_name = document.querySelector("#author");
const form = document.querySelector("form");

// an array to hold the book objects
const myLibrary = [];

function Book(name, author) { 
  this.name = name;
  this.author = author;
}

function addBookToLibrary(book) {
  // function to take user input and add them to the myLibrary array.
  myLibrary.push(book);
  while (container.firstChild)
    {
        container.removeChild(container.lastChild);
    }
  myLibrary.forEach((book, index) => {
    //child elements
    let writer = document.createElement("div");
    let book_name = document.createElement("div");
    let remove_button = document.createElement("button");
    let read_button = document.createElement("button");
    
    // child elements' text
    writer.textContent = "Author: " + book.author;
    book_name.textContent = "Title: " + book.name;
    remove_button.textContent = "Remove";
    read_button.textContent = "Read";
  
    // making newbook which will act as a parent
    let newbook = document.createElement("div");
    newbook.setAttribute("data-index", index);
  
    //appending child elements into newbook
    newbook.appendChild(book_name);
    newbook.appendChild(writer);
    newbook.appendChild(read_button);
    newbook.appendChild(remove_button);
  
    // adding the remove button event listener
    remove_button.addEventListener("click", () => {
      myLibrary.splice(newbook.data-index, 1);
      newbook.remove();
    })
  
    // toggling the reading status
    read_button.addEventListener("click", () => {
      if (read_button.textContent === "Read") {
        read_button.textContent = "Not read";
      } else {
        read_button.textContent = "Read";
      }
    })
  
    newbook.style.border = "1px solid black";
    newbook.style.padding = "10px";
    newbook.style.display = "flex";
    newbook.style.flexDirection = "column";
    newbook.style.gap = "5px";
    
    // adding newbook to the container to be displayed
    container.appendChild(newbook); 
  });
}

new_btn.addEventListener("click", () => {
  // needs to load the form for input
  dialog.showModal();
});

close.addEventListener("click", () => {
  dialog.close();
})

submit.addEventListener("click", input)

function input(event) {
  event.preventDefault();
  if (book_title.value != "" && author_name.value != "") {
    let item = new Book(book_title.value, author_name.value);
    addBookToLibrary(item);
    form.reset()
    dialog.close();
  } else {
    alert("Please fill out the forms correctly"); 
  }
}