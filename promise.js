// // // function timeout(ms) {
// // //   return new Promise((resolve, reject) => {
// // //     setTimeout(resolve, ms, 'done');
// // //   });
// // // }

// // // timeout(100).then((value) => {
// // //   console.log(value);
// // // });

// // // function loadImageAsync(url) {
// // //   return new Promise(function(resolve, reject) {
// // //     const image = new Image();

// // //     image.onload = function() {
// // //       resolve(image);
// // //     };

// // //     image.onerror = function() {
// // //       reject(new Error('Could not load image at ' + url));
// // //     };

// // //     image.src = url;
// // //   });
// // // }


// // const getJSON = function(url) {
// //   const promise = new Promise(function(resolve, reject){
// //     const handler = function() {
// //       if (this.readyState !== 4) {
// //         return;
// //       }
// //       if (this.status === 200) {
// //         resolve(this.response);
// //       } else {
// //         reject(new Error(this.statusText));
// //       }
// //     };
// //     const client = new XMLHttpRequest();
// //     client.open("GET", url);
// //     client.onreadystatechange = handler;
// //     client.responseType = "json";
// //     client.setRequestHeader("Accept", "application/json");
// //     client.send();

// //   });

// //   return promise;
// // };

// // getJSON("/posts.json").then(function(json) {
// //   console.log('Contents: ' + json);
// // }, function(error) {
// //   console.error('出错了', error);
// // });

// // const p1 = new Promise(function (resolve, reject) {
// //   setTimeout(() => reject(new Error('fail')), 3000)
// // })

// // const p2 = new Promise(function (resolve, reject) {
// //   setTimeout(() => resolve(p1), 1000)
// // })

// // p2
// //   .then(result => console.log(result))
// //   .catch(error => console.log(error))

// var scope = "global scope";
// function checkscope(){
//     var scope = "local scope";
//     function f(){
//         return scope;
//     }
//     return f;
// }
// console.log(
//   checkscope()()

// );

console.log(

  JSON.stringify([6,8,9].sort()) === JSON.stringify([9,8,6].sort())
);