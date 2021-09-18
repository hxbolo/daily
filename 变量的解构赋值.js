// // let a = 1  
// // let b = 2
// // let c= 3

// // let [a,b,c] = [1,2,3]
// // console.log(a,b,c);

// // let [foot,[[bar],baz]] = [1,[[2],3]]
// // console.log(
// //   foot,bar,baz
// // );

// // let [a,...b] = [1,34,5,6]
// // console.log(a,b);

// // let [x,y,...z] = ['a']
// // console.log(x,y,z);

// // let [x =1] = [undefined]
// // console.log(x);

// // 对象解构赋值
// // let {foo,bar} = {foo:1,bar:2}
// // console.log(foo, bar);

// // let {foo: baz} = {foo :'aaa',baz:'bbb'}
// // console.log( baz);

// // let obj = {
// //   p:[ 'hello', { y : 'World' } ]
// // }
// // let { p, p:[x,{y}]} = obj
// // console.log( p,x,y);

// // const obj1 = {}
// // const obj2 = {foo: 'bar'}
// // Object.setPrototypeOf(obj1 , obj2)
// // const {foo } = obj1

// // function example() {
// //   return [1,2,3]
// // }
// // let [a,b,c] = example()

// // console.log(a,b,c);
// // function ex(){
// //   return {
// //     foo: 1,
// //     bar:2
// //   }
// // }

// // let {foo,bar } = ex()
// // console.log(foo,bar);


// // const proto = {
// //   x:'hello',
// //   foo(){
// //     console.log(this.x);
// //   }
// // }

// // const obj = {
// //   x:'world',
// //   foo(){
// //     super.foo() // 
// //   }
// // }

// // Object.setPrototypeOf(obj,proto)

// // console.log(Object.setPrototypeOf(obj,proto));
// // console.log(obj);
// // obj.foo() 
// // let a = {a:1,b:2,c:3}
// // let aClone ={...a}
// // console.log('aClone',aClone);

// // let bClone = Object.assign({},a)
// // console.log(bClone);

// // let a = 1 , b = 2, c = 3,d = 4

// // let is = a==1?.b==3?.c==3
// // console.log(is);
// // let message = null
// // let user = undefined
// // let body = undefined
// // let firstName =  true
// // const a = message?.body?.user?.firstName || 'default';
// // // const fooValue = myForm.querySelector('input[name=foo]')?.value
// // console.log(a);

// // function a(){
// //   if (myForm.checkValidity?.() === false) {
// //     console.log(1111);
// //     // 表单校验失败
// //     return;
// //   }
  
// // }
// // let myForm = {
// //   checkValidity: Function
// // }
// // console.log(myForm.checkValidity());

// // let a = {
// //   b:1
// // }

// // let b={
// //   q:1,
// //   w:2,
// //   e:null
// // }

// // console.log(b?.w?.q||3);

// // console.log(a?.b ,b?.q,b?.w);

// // let a={
// //   b:{
// //     c:0
// //   }
// // }
// // let d = a.b.c ?? '123'
// // console.log(d);

// // let a = {a:1,  b:2 }
// // let b = { b:1, c:3}
// // // 对象的合并  
// // // 同名属性是替换的
// // console.log(Object.assign({},a,b)); //{ a: 1, b: 1, c: 3 }

// // // 浅拷贝 Object.assign()拷贝得到是这个对象的引用， 这个对象任何的改变，都会反映到目标对象上
// // let obj1 = { a:{ b:1}}
// // let obj2 = Object.assign({},obj1)
// // console.log(obj1.a.b , obj2.a.b); //1, 1

// // // 可以用来出来数组， 但是会被视为数组 
// // Object.assign([1,2,3],[4,5]) // [4,5,3]


// const obj = {
//   foo: 123,
//   get bar(){return 'abc'}

// }

// console.log(Object.getOwnPropertyDescriptors(obj)); 
// //{
// //   foo: { value: 123, writable: true, enumerable: true, configurable: true },
// //   bar: {
// //     get: [Function: get bar],
// //     set: undefined,
// //     enumerable: true,
// //     configurable: true
// //   }
// // }


let obj = {
  p:[
    'aaaa',
    {y: 'bbbb'}
  ]
}

let {p: [x, {y}]} = obj
console.log(x,y);

