// class Point{
//   constructor (x,y){
//     this.x = x
//     this.y = y
//   }
//   toString(){
//     return `(${this.x}, ${this.y})`
//   }

// }

// let point  = new Point(2,3)

// console.log(

//   point.toString()
// );

// class Point{

// }
// class ColorPoint extends Point{
//   constructor (x,y,color){

//     super(x,y) // 调用父类的constructor(x, y)
//     this.color = color
//   }
//   toString(){
//     return this.color + '' + super.toString()// 调用父类的toString()
//   }
// }

// console.log(new ColorPoint(1,2,3));


// class A {
//   P(){
//     return 2
//   }
// }

// class B extends A{
//   constructor (){
//     super ()
//     console.log(super.P())
//   }
// }

// new B()

class A {
  constructor(){
    this.p = 2
  }
}

class B extends A {
  get m(){
    return super.p
  }
}

let b = new B()
console.log(b.m);