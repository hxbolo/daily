
let a =  objectFactory ('h','x')

function MyNew() {

  //创建一个空对象
  let obj = {}
  //获取构造函数
  let Con = [].shift.call(arguments)
  //设置空对象的原型
  obj.__proto__ = Con.prototype
  // 使用apply绑定this，执行构造函数
  let result = Con.apply(obj, arguments)
  return result instanceof Object ? result : obj
  }
  