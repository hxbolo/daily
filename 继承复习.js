function Parent(){
  this.name  = '你爹'
  this.sax =  'box'
}

function Child(){
  this.name = '儿子'
}

// 将子类的原型指向父类的实例
Child.prototype =  new Parent()


let child = new Child()

let parent  = new Parent()

// 优点： 继承了父类的模板， 又继承了父类的原型对象

// 缺点： 无法实现多继承   创建子类函数无法向构造函数传参
