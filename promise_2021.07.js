// let promise =  new Promise(function (resolve, reject){
//    console.log('Promise');
//    resolve()
// })

// promise.then(() =>{
//   console.log('resolved');
// })

// console.log('hi');

// // 实现ajax

// const getJSON =  function(url){
//   const promise = new Promise(function (resolve, reject){
//     const handler = function(){
//       if(this.readyState !== 4 ){
//         return
//       }
//       if(this.status === 200){
//         resolve(this.response)
//       }else{
//         reject(new Error(this.statusText))
//       }
//     }
//     const clinet =  new XMLHttpRequest()
//     clinet.open('GET',url)
//     clinet.onreadystatechange =  handler
//     clinet.responseType = 'json'
//     clinet.setRequestHeader('Accpet','applycation/json')
//     clinet.send()
//   })
//   return promise

// }

// getJSON('/posts.json').then(function (json){
//   console.log('Contents: ' + json);
// }, function (error){
//   console.log('出错');
// })

// const p1 = new Promise(function(resolve,reject){
//   console.log('1111');
//   setTimeout(() => {
//     console.log('2222');
//     reject(new Error('fail'))
//   }, 3000);
// })
// const p2 = new Promise(function(resolve,reject){
//   console.log('333');
//   setTimeout(() => {
//     console.log('444');
//     resolve(p1)
//   }, 1000);
// })

// p2.then(res =>{console.log(res)}).catch(err =>{
//   console.log(err);
// })


// const getJSON = new Promise(function(resolve,reject){
//     setTimeout(() => {
//       resolve()
//     }, 1000);
//   })

  // getJSON("/post/1.json").then(
  //   post => getJSON(post.commentURL)
  // ).then(
  //   comments => console.log("resolved: ", comments),
  //   err => console.log("rejected: ", err)
  // );



// 报错   Promise  内部错误不会影响到外部执行
// const someAsyncThing =  function(){

//   // 报错   Promise  内部错误不会影响到外部执行
//   return new Promise((resolve, reject) => {
//     resolve(x + 2)
//   }) 
// }

// someAsyncThing().then(function () {
//   console.log('++++good++');
// }).catch(function(error) {
//   y+3
//   console.log('nono',error);
// }).catch(function(error){
//   console.log('nono2222',error);
// })

// setTimeout(() => {
//   console.log(1111);
// }, 100);

// const p1 =  new Promise((reslove,reject) => {
//   //  throw new Error('报错')
//    reject('aaa')
//   // reslove(x+y)
// })
// .then(res => res)
// .catch(e => e)

// const p2 =  new Promise((reslove,reject) => {
//   throw new Error('报错')
//   // reject()
// })
// .then(res => res)
// .catch(e => e)


// Promise.race([p1,p2]).then(res =>console.log(res)).catch(e => console.log(e))



// async function getStockPriceByName(name) {
//   const symbol = await getStockSymbol(name);
//   const stockPrice = await getStockPrice(symbol);
//   return stockPrice;
// }

// getStockPriceByName('goog').then(function (result) {
//   console.log(result);
// });


// function timeout (ms){
//   return new Promise((resolve) =>{
//     setTimeout(resolve, ms);
//   })
// }

// async function ansycPoint(val, ms){
//   await timeout(ms)
//   console.log(val);
// }
// ansycPoint('aaaaaa',500)

// class Sleep {
//   constructor(timeout) {
//     this.timeout = timeout;
//   }
//   then(resolve, reject) {
//     const startTime = Date.now();
//     setTimeout(
//       () => resolve(Date.now() - startTime),
//       this.timeout
//     );
//   }
// }

// (async () => {
//   const sleepTime = await new Sleep(3000);
//   console.log(sleepTime);
// })();


// function sleep(interval){
//   return new Promise(resolve =>{
//     setTimeout(resolve,interval)
//   })
// }

// async function one2FiveInAsync(){
//   for(let i =  1; i <= 5; i++){
//     console.log(i);
//     await sleep(1000)
//   }
// }
// one2FiveInAsync()


// async function f(){
//   await new Promise((resolve,reject) => {
//     throw new Error('出错')
//   })
// }

// f().then(v => console.log(v)).catch(e=> console.log(e))


