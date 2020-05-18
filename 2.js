// Explain and what is the ouput of f.x
var x=0;
function foo(){
    x++;
    this.x = x;
    return foo;
}
var f = new new foo()
console.log(f.x)
