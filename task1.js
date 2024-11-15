// 1. Object Creation Basics
const superhero = {
    name: "Shadow Streak",
    secretIdentity: "Luna Light",
    powers: ["invisibility", "teleportation", "shadow manipulation"],
    weakness: "bright light"
};

// 2. Methods and Functionality
superhero.usePower = function(powerName) {
    if (this.powers.includes(powerName)) {
        console.log(`${this.name} uses ${powerName}!`);
    } else {
        console.log(`${this.name} does not have the power ${powerName}.`);
    }
};

superhero.revealIdentity = function() {
    console.log(`The secret identity of ${this.name} is ${this.secretIdentity}.`);
};

// Test the methods
superhero.usePower("invisibility");
superhero.revealIdentity();

// 3. Object Constructors
function Superhero(name, secretIdentity, powers, weakness) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = powers;
    this.weakness = weakness;
}

Superhero.prototype.usePower = function(powerName) {
    if (this.powers.includes(powerName)) {
        console.log(`${this.name} uses ${powerName}!`);
    } else {
        console.log(`${this.name} does not have the power ${powerName}.`);
    }
};

Superhero.prototype.revealIdentity = function() {
    console.log(`The secret identity of ${this.name} is ${this.secretIdentity}.`);
};

// Create a few Superhero instances
const hero1 = new Superhero("Blaze Storm", "Elara Blaze", ["fire control", "flight"], "water");
const hero2 = new Superhero("Aqua Wave", "Marina Tide", ["water manipulation", "healing"], "electricity");

// Test the methods on hero instances
hero1.usePower("fire control");
hero2.revealIdentity();

// 4. Prototypal Inheritance
function Villain(name, secretIdentity, powers, weakness) {
    Superhero.call(this, name, secretIdentity, powers, weakness);
}

Villain.prototype = Object.create(Superhero.prototype);
Villain.prototype.constructor = Villain;

Villain.prototype.scheme = function() {
    console.log(`${this.name} is scheming an evil plan!`);
};

// Create a Villain instance and test the inherited methods
const villain1 = new Villain("Dark Phantom", "Victor Shade", ["mind control", "shadow manipulation"], "sunlight");

villain1.usePower("mind control");
villain1.revealIdentity();
villain1.scheme();

// 5. Object Iteration and Transformation
const characters = [hero1, hero2, villain1];

characters.forEach(character => character.revealIdentity());

const heroesOnly = characters.filter(character => !(character instanceof Villain));
console.log("Heroes only:", heroesOnly.map(hero => hero.name));




// JavaScript to update the battle log in real-time
document.getElementById('hero1').addEventListener('click', () => {
    document.getElementById('battle-log').textContent += "\nBlaze Storm attacks Dark Phantom!";
});

document.getElementById('villain1').addEventListener('click', () => {
    document.getElementById('battle-log').textContent += "\nDark Phantom defends with shadow manipulation!";
});
