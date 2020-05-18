// What is the oput of y
var y=1;
if(function f(){}){
    console.log( typeof f);
    y+= typeof f;
}
console.log(y);
