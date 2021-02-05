function doSomething() {
    console.log(3333);
}
console.log(2222);
// setTimeout(doSomething, 4000);

// setTimeout(function(){
//     console.log('lazy and waiting')
// }, 5000)

// setTimeout(() => {
//     console.log('use arrow function')
// }, 5000)

setInterval(function () {
    console.log('use set intervel ')
}, 3000)

// setInterval(() => {
//     console.log('use set intervel and arrow function use')
// }, 3000)

console.log(4444);