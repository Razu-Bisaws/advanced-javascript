const normalPerson = {
    firstName:'Razu',
    lastName:'Biswas',
    salary:15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        this.salary = this.salary - amount - tax - tips;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Nyak',
    salary: 25000,
}

const friendlyPerson = {
    firstName: 'Friendly',
    lastName: 'kayek',
    salary: 30000,
}

// //call method
normalPerson.chargeBill.call(heroPerson, 2300, 100, 10);
normalPerson.chargeBill.call(heroPerson, 2700, 134, 120);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 3420, 3400,60);
console.log(friendlyPerson.salary);
console.log(normalPerson.salary);



// apply method//
normalPerson.chargeBill.apply(heroPerson, [3000, 300, 1234]);
console.log(heroPerson.salary);
normalPerson.chargeBill.apply(friendlyPerson, [3000, 300, 1234]);
console.log(friendlyPerson.salary);