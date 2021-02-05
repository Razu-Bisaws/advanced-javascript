var name = 'Razu';
function add(num1, num2) {
    result = num1 + num2;
    console.log('name inside', name);

    function double(num) {
        return num * 2;
    }
    // return result;
    var total = double(result);
    return total;
}
//console.log('result outside', result);
console.log('name outside', name);
var sum = add(12, 12);
console.log(sum);
