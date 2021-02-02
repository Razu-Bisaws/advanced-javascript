const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5);
console.log(part);

const removed = nums.splice(2,3, 77);
console.log(removed);
console.log(nums);

const together = nums.join(" id ");
console.log(together);


// function doSomething(x,y = 4){
//     console.log(y);
// }
// doSomething(3,2);