

// // function deepClone(obj){
// //   var newObj = obj instanceof Array ? [] : {}
// //   for(var i in obj){
// //     var temple =  typeof obj[i] == 'object' ? deepClone(obj[i]) : obj[i]
// //     newObj[i]= temple
// //   }
// //   return newObj
// // }

// // let a = {a:[1],b:3}
// // let b = deepClone(a)
// // a.c = 1
// // console.log(a,b, a== b, a.a, );

// // var c = Object.assign({},a)
// // console.log(c);

// // let arr = [1,2,4,{a:1}]
// // let arr1 =  arr.concat()
// // arr.push(1)
// // console.log(arr , arr1);

// // let arr = [1, 3, {

// //   username: ' kobe'

// //   }];

// // let arr3 = arr.slice();

// // arr3[2].username = 'wade'

// // console.log(arr);

// // let arr = [1,2,3,{
// //   name: 'hx'
// // }]
// // let arr2 =  JSON.parse(JSON.stringify(arr))
// // arr2.name =  'bolo'
// // console.log(arr, arr2); //[ 1, 2, 3, { name: 'hx' } ] [ 1, 2, 3, { name: 'hx' }, name: 'bolo' ]

// function ones(func){
//   var tag=true;
//   return function(){
//     if(tag==true){
//       func.apply(null,arguments);
//       tag=false;
//     }
//     return undefined
//   }
// }
// ones()


// setTimeout(
//   function(){
//     console.log(1)
//   },0);
//   newPromise(
//     function(resolve,reject){
//       console.log(2);
//       resolve();
//     }).then(
//       function(){
//         console.log(3)
//       }).then(
//         function(){
//           console.log(4)
//         });
//     process.nextTick(
//       function(){
//         console.log(5)
//       });
//     console.log(6);


//     2,6,53,4,1


// setTimeout(function(){console.log(1)},0);

// new Promise(function(resolve,reject){
//    console.log(2);
//    setTimeout(function(){resolve()},0)
// }).then(function(){console.log(3)
// }).then(function(){console.log(4)});

// process.nextTick(function(){console.log(5)});

// console.log(6);

// 2,6. 5.1.34


