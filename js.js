function Book(title, author, pages, haveRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead

    this.info = function() {
        let read = (this.haveRead) ? "have read" : "not read yet";

        return `The ${this.title} by ${this.author}, ${this.pages}, ` + read
    }
}














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
