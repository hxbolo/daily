// function Person(){}

// var p = new Person()

// console.log(p.__proto__ === Person.prototype);

// console.log(Person.prototype.constructor == Person );

// console.log(Person.prototype.__proto__ == Object.prototype);

// console.log(Object.prototype.prototype == null);

// console.log(Object.prototype.constructor == Object);

    // console.log(Object.__proto__ == Function.prototype);

// console.log( Person.__proto__ == Function.prototype);

// console.log(Function.__proto__ == Function.prototype);
// console.log(Function.prototype == Function.prototype);

function Person(){
  Person.prototype.name =  'hx'
  Person.prototype.sayHi = function(){
    console.log(this.name);
  }
}


let person = new Person()

// JS 在创建对象的时候， 都有一个__proto__的属性， 他指向了构造函数的原型对象
// 每个对象都有__propto__属性， 但是函数对象只有prototype属性
// 

