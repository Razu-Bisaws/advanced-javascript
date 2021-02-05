class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person('hero', 'nayek', 20000);
console.log(heroPerson);
const friendlyPerson = new Person('heros', 'kayek', 22000);
console.log(friendlyPerson);

//another system
function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary
}
const oldPerson = new Person1('Grand', 'dgn', 1200);
console.log(oldPerson);