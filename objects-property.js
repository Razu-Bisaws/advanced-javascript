const students = [
    { id: 21, name: 'omar s' },
    { id: 31, name: 'manaaaaa d' },
    { id: 41, name: 'messsss g' },
    { id: 71, name: 'neyuuuu k' },
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id > 40);
const biggerOne = students.find( s => s.id > 40);
console.log(biggerOne);