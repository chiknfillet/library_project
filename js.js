const myLibrary = []

function Book(title, author, pages, haveRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
    this.id = crypto.randomUUID()

    this.info = function() {
        let read = (this.haveRead) ? "have read" : "not read yet";

        return `The ${this.title} by ${this.author}, ${this.pages}, ` + read
    }
}

function addBookToLibrary(title, author, pages, haveRead) {
    const newBook = new Book(title, author, pages, haveRead)
    myLibrary.push(newBook)
}

function displayLibraryBooks() {
    const bookContainer = document.querySelector(".book-container")
    bookContainer.innerHTML = "" // Clear previous books
    for (let book of myLibrary) {
        const newBook = document.createElement("div")
        newBook.classList.add("book")

        newBook.innerHTML += `<p class="title">Book: ${book.title}</p>`;
        newBook.innerHTML += `<p class="author">Author: ${book.author}</p>`
        newBook.innerHTML += `<p class="pages">Pages: ${book.pages}</p>`
        newBook.innerHTML += `<p class="read">Read: ${book.haveRead ? "Yes" : "No"}</p>`
        newBook.innerHTML += `<button class="button-read">Mark as Read</button>`
        newBook.innerHTML += `<button class="remove">Remove Book</button>`
        newBook.querySelector(".button-read").addEventListener("click", () => {
            book.haveRead = !book.haveRead
            displayLibraryBooks()
        })
        newBook.querySelector(".remove").addEventListener("click", () => {
            myLibrary.splice(myLibrary.indexOf(book), 1)
            displayLibraryBooks()
        })
        bookContainer.appendChild(newBook)
    }
}

document.querySelector(".btn-submit").addEventListener("click", () => {
    const title = document.querySelector(".title").value
    const author = document.querySelector(".author").value
    const pages = document.querySelector(".pages").value
    const haveRead = document.querySelector(".read").checked
    
    if (title && author && pages) {
        addBookToLibrary(title, author, pages, haveRead)
        displayLibraryBooks()
        document.querySelector("#myForm").style.display = "none"
        document.querySelector("#myForm").reset()
    } else {
        alert("Please fill in all fields.")
    }
});

document.querySelector(".btn-add-book").addEventListener("click", () => {
  document.querySelector("#myForm").style.display = "block";
});

document.querySelector(".btn-cancel").addEventListener("click", () => {
  document.querySelector("#myForm").style.display = "none";
});

addBookToLibrary("Harry Potter", "J.K. Rowling", 420, false)
addBookToLibrary("Art of War", "Sun Tzu", 102, true)
addBookToLibrary("Meditation", "Julius Ceasar", 240, true)

displayLibraryBooks()








// // Initialize constructor functions
// function Hero(name, level) {
//   this.name = name;
//   this.level = level;
// }

// function Warrior(name, level, weapon) {
//     //Calls this constructor and calls the Hero constructor
//   Hero.call(this, name, level); 

//   this.weapon = weapon;
// }

// function Healer(name, level, spell) {
//   Hero.call(this, name, level);

//   this.spell = spell;
// }

// // Link prototypes and add prototype methods
// Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
// Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// Hero.prototype.greet = function () {
//   return `${this.name} says hello.`;
// }

// Warrior.prototype.attack = function () {
//   return `${this.name} attacks with the ${this.weapon}.`;
// }

// Healer.prototype.heal = function () {
//   return `${this.name} casts ${this.spell}.`;
// }
