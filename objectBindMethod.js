const normalPerson = {
    firstName:'Razu',
    lastName:'Biswas',
    salary:15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary - amount;
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

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(4000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);



const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(3000);
console.log(friendlyPerson.salary);
const normalChargeBill = normalPerson.chargeBill.bind(normalPerson);
normalChargeBill(300);
console.log(normalPerson.salary);
