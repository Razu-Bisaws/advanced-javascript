const normalPerson = {
    firstName:'Razu',
    lastName:'Biswas',
    salary:15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
normalPerson.chargeBill(1000);
normalPerson.chargeBill(1200);
console.log(normalPerson.salary);
