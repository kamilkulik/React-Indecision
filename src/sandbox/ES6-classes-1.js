class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi! I'm ${this.name}`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `. Their major is ${this.major}`;
        }

        return description;
    }
};

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greetings = super.getGreeting();

        if (this.hasLocation()) {
            greetings += `. I currently live in ${this.homeLocation}`;
        }

        return greetings;
    }
}

const me = new Traveller('Kamil', 32, 'Wroclaw');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting())