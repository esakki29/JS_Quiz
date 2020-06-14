/* what is the output */
const arr =[10,,20];
arr.forEach(val => console.log(val));

var spreadArr = [...arr];
spreadArr.forEach( val => console.log(val));

/* same principle */
const arr = new Array(10);
arr.forEach(val => console.log(val));

var spreadArr = [...arr];
spreadArr.forEach( val => console.log(val));
