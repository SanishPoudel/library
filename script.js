// assigning constants to use
const container = document.querySelector(".container");
const new_btn = document.querySelector(".new_btn");
const dialog = document.querySelector("dialog");
const close = document.querySelector(".close");
const submit = document.querySelector(".submit");
const book_title = document.querySelector("#name_of_book");
const author_name = document.querySelector("#author");
const form = document.querySelector("form");
const reading_status = document.querySelectorAll('input[name="reading_status"]');

// an array to hold the book objects
const myLibrary = [];

class Book{
  constructor(name, author, reading_state) { 
    // the constructor
    this.name = name;
    this.author = author;
    this.reading_state = reading_state;
  }
} 

function addBookToLibrary(book) {
  // function to take user input and add them to the myLibrary array.
  myLibrary.push(book);
  while (container.firstChild) // to make sure that items don't get repeated
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

    // reading status
    if (book.reading_state === "yes") {
      read_button.textContent = "Read";
    } else {
      read_button.textContent = "Not Read";
    }
    
  
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
  
    // adding basic styles
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
  // closing the form
  dialog.close();
})

// for submit button
submit.addEventListener("click", input);

// defining the input function used in the submit button
function input(event) {
  event.preventDefault();

  // checking if the user has provided input or not
  if (book_title.value != "" && author_name.value != "") 
  {
    let read_unread;
    let isChecked = false;

    // checking if they have selected a button or not
    reading_status.forEach(btn => 
    {
      if (btn.checked) 
      {
        isChecked = true;
        read_unread = btn.value;
      }
    });
    if (!isChecked) 
    {
      alert("Please select a reading status");
    } 
    else 
    {
      // gets here if the user gave a valid input
      let item = new Book(book_title.value, author_name.value, read_unread);
      addBookToLibrary(item);
      form.reset()
      dialog.close();
    }
  } 
  else 
  {
    if (book_title.value === "") {
      book_title.setCustomValidity("Please enter the title of the book.");
      form.reportValidity();
    } else {
      book_title.setCustomValidity("");
    }

    if (author_name.value === "") {
      author_name.setCustomValidity("Please enter the name of the author.");
      form.reportValidity();
    } else {
      author_name.setCustomValidity("");
    }
  }
}