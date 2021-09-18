// // // // function Person(){

// // // // }

// // // // Person.prototype.name = 'hx'
// // // // let person1 = new Person()
// // // // let person2 = new Person()

// // // // console.log(person1.name);
// // // // console.log(person2);



// // // // function Person () {

// // // // }

// // // // let person = new Person()

// // // // console.log(person.__proto__ === Person.prototype);  // true

// // // // console.log(Person.prototype.constructor == Person);

// // // // console.log(Object.getPrototypeOf(person) == Person.prototype);



// // // // var scope = "global scope";
// // // // function checkscope(){
// // // //     var scope = "local scope";
// // // //     function f(){
// // // //         return scope;
// // // //     }
// // // //     return f();
// // // // }
// // // // checkscope();

// // // console.log(foo);

// // // function foo(){
// // //     console.log("foo");
// // // }

// // // var foo = 1;



// // var value = 1;

// // var foo = {
// //   value: 2,
// //   bar: function () {
// //     return this.value;
// //   }
// // }

// // //示例1
// // console.log(foo.bar());
// // //示例2
// // console.log((foo.bar)());
// // //示例3
// // console.log((foo.bar = foo.bar)());
// // //示例4
// // console.log((false || foo.bar)());
// // //示例5
// // console.log((foo.bar, foo.bar)());

// var data = [];

// for (var i = 0; i < 3; i++) {
//   data[i] = function(i){
//     return  function () {
//       console.log(i);
//     };
//   }(i)
// }

// data[0]();
// data[1]();
// data[2]();


// call

// ！！！思路
// 将函数设为对象的属性
// foo.fn = bar
// 执行该函数
// foo.fn()
// 删除该函数
// delete foo.fn



Function.prototype.call2 = function(context){
  console.log(this);
  var context =  context || window
  context.fn = this
  console.log('arguments',arguments);
  var args = []
  for(var i = 0 ,len = arguments.length; i < len ; i++){
    args.push('arguments[' + i+ ']')
  }
  console.log('-=-=', [...arguments].slice(1));

 let res =  eval('context.fn(' + args + ')')
  delete context.fn
  return res
}

var foo = {
  value: 1
}
var value = 2

function bar(name , age){
  console.log(name);
  console.log(age);
  console.log(this.value);
  return {
    value : this.value,
    name,
    age
  }
}

// bar.call2(foo,'jx','11')
bar.call2(null)


Function.prototype.apply = function(context, arr){
  var context =Object(context) || Window
  context.fn =  this
  var res 
  if(!arr){
    res = context.fn()
  }else{
    var ages = []
    for(i =0 ,len = arr.lenght ; i< len; i++){
      args.push('arr[' + i + ']')
    }
    res = eval('context.fn('+ args +')')
  }

  delete context.fn
  return res
}




