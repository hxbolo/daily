// call 
// this指向这个函数，参数依次传递

function add(x,y){
  console.log(this);
  return this.a+x+y
}

let obj = {
  a:1
}


Function.prototype.myCall = function(context, prams){
  console.log(context, prams);
  context.fn =  this
  let res = context.fn(...prams)
  delete context.fn
  return res
  
}

let a = add.myCall(obj,[2,3,5])
console.log(a);