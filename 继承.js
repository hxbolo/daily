// 1.原型链继承
// 多个实例对引用类型的操作会被篡改
// 每个构造函数都有一个原型对象。原型对象都包含一个指向构造函数的指针（__proto）， 而实例都包含一个原型对象指针（__proto）

// function SuperType() {
//   this.property = true;
// }

// SuperType.prototype.getSuperValue = function() {
//   return this.property;
// }

// function SubType() {
//   this.subproperty = false;
// }

// SubType.prototype =  new SuperType()

// SubType.prototype.getSubValue = function() {
//   return this.subproperty;
// }
// var instance = new SubType();
// console.log(instance.getSuperValue()); // true

// =======================================================

// 借用构造函数
// 使用父类的构造函数来增强子类实例， 等同于复制给子类（不使用原型）

// function SuperType(){
//   this.color=["red","green","blue"];
// }

// function SubType(){
//   // 继承自SuperType
//   SuperType.call(this)
// }

// var a  = new SubType()
// a.color.push('fff')

// console.log(a.color);

// var b =  new SuperType()
// console.log(b.color);

// 核心代码是SuperType.call(this), 创建子类实例时调用Subtype 构造函数， 于是subtype 的每个实例都会被SuperType 中的属性复制一份

// 缺点
// 只能继承父类的实例属性和方法， 不能继承原型上的属性和方法
// 无法实现复用， 每个子类都有父类实例函数的副本影响性能


// =======================================================

// 组合继承
// 用原型链实现对原型属性和方法的继承， 用借用构造函数实现实例属性的继承

// function SuperType (name ){
//   this.name = name 
//   this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName =  function(){
//   console.log(this.name);
// }

// function SubType(name, age){
//   // 继承属性
//   SuperType.call(this,name)
//   this.age = age
// }

// // 继承方法   构建原型链
// SubType.prototype = new SuperType()
// // 重写SubType.prototype的constructor属性，指向自己的构造函数SubType
// SubType.prototype.constrouctor =  SubType

// SubType.prototype.sayAge = function(){
//   console.log(this.age,'age');
// }


// let a = new SubType('hx',16)
// a.colors.push('888')
// console.log('a.colors',a.colors);

// a.sayAge()
// a.sayName()

// let b =  new SubType('bolo',16)
// console.log(b.colors);
// b.sayAge()
// b.sayName()

// 实例a  上的 两个属性就屏蔽了其原型对象SubType.prototype的两个同名属性， 所以 组合模式， 
// 缺点
// 在使用子类创建实例对象是， 其原型中会纯在两份相同的属性和方法


// =================================================================================

// 寄生组合式继承
// function inheritPrototype(subType, superType){
//   var prototype = Object.create(superType.prototype); // 创建对象，创建父类原型的一个副本
//   prototype.constructor = subType;                    // 增强对象，弥补因重写原型而失去的默认的constructor 属性
//   subType.prototype = prototype;                      // 指定对象，将新创建的对象赋值给子类的原型
// }

// // 父类初始化实例属性和原型属性
// function inheritPrototype(subType, superType){
//   var prototype = Object.create(superType.prototype); // 创建对象，创建父类原型的一个副本
//   prototype.constructor = subType;                    // 增强对象，弥补因重写原型而失去的默认的constructor 属性
//   subType.prototype = prototype;                      // 指定对象，将新创建的对象赋值给子类的原型
// }

// // 父类初始化实例属性和原型属性
// function SuperType(name){
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function(){
//   alert(this.name);
// };

// // 借用构造函数传递增强子类实例属性（支持传参和避免篡改）
// function SubType(name, age){
//   SuperType.call(this, name);
//   this.age = age;
// }

// // 将父类原型指向子类
// inheritPrototype(SubType, SuperType);

// // 新增子类原型属性
// SubType.prototype.sayAge = function(){
//   alert(this.age);
// }

// var instance1 = new SubType("xyc", 23);
// var instance2 = new SubType("lxy", 23);

// instance1.colors.push("2"); // ["red", "blue", "green", "2"]
// instance1.colors.push("3"); // ["red", "blue", "green", "3"]


//这个例子的高效率体现在它只调用了一次SuperType 构造函数，并且因此避免了在SubType.prototype 上创建不必要的、多余的属性。于此同时，原型链还能保持不变；因此，还能够正常使用instanceof 和isPrototypeOf()



// =================================================================================

// ES6类继承extends

class Rectangle{
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

   // Getter
   get area() {
    return this.calcArea()
  }

  // Method
  calcArea() {
      return this.height * this.width;
  }

  
}
const rectangle = new Rectangle(10, 20);
console.log(rectangle.area);

// 继承
class Square extends Rectangle{
  constructor (length){
    super (length, length)

    // this,name = 
  }

  get area(){
    return this.height * this.width;
  }
}

const square = new Square(10)

console.log(square.area);


// 总结 
// 函数声明和类声明的区别
// 函数声明会提声变量， 类不会 ， 
// ES5 和ES6 区别
// es5 的继承实至上先创建子类的实例对象， 然后在将父类的方法添加到this 上

// es6 先创建父类的实例对象， 然后在用子类构造函数修改this， ， 因为子类没有自己的this 对象， 所必须先调用父类的super()方法， 否则新建实例报错