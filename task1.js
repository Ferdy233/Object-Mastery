
const superhero = {
    name: "Shadow Streak",
    secretIdentity: "Luna Light",
    powers: ["invisibility", "teleportation", "shadow manipulation"],
    weakness: "bright light"
};


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


superhero.usePower("invisibility");
superhero.revealIdentity();


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


const hero1 = new Superhero("Blaze Storm", "Elara Blaze", ["fire control", "flight"], "water");
const hero2 = new Superhero("Aqua Wave", "Marina Tide", ["water manipulation", "healing"], "electricity");


hero1.usePower("fire control");
hero2.revealIdentity();


function Villain(name, secretIdentity, powers, weakness) {
    Superhero.call(this, name, secretIdentity, powers, weakness);
}

Villain.prototype = Object.create(Superhero.prototype);
Villain.prototype.constructor = Villain;

Villain.prototype.scheme = function() {
    console.log(`${this.name} is scheming an evil plan!`);
};


const villain1 = new Villain("Dark Phantom", "Victor Shade", ["mind control", "shadow manipulation"], "sunlight");

villain1.usePower("mind control");
villain1.revealIdentity();
villain1.scheme();


const characters = [hero1, hero2, villain1];

characters.forEach(character => character.revealIdentity());

const heroesOnly = characters.filter(character => !(character instanceof Villain));
console.log("Heroes only:", heroesOnly.map(hero => hero.name));





document.getElementById('hero1').addEventListener('click', () => {
    document.getElementById('battle-log').textContent += "\nBlaze Storm attacks Dark Phantom!";
});

document.getElementById('villain1').addEventListener('click', () => {
    document.getElementById('battle-log').textContent += "\nDark Phantom defends with shadow manipulation!";
});
