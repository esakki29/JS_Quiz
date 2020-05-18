// Explain and what is the o/p of num
var num =0;
async function inc(){
num+=await 2;
console.log(num);
}
inc();
num+=1;
console.log(num)
