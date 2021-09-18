// promise

function sleep(ms){
  let temple =  new Promise(resolve =>{
    console.log(111);
    setTimeout(resolve, ms)
  })
  return temple
}

sleep(3000).then( function(){
  console.log(222);
})

// async  
function sleep1 (ms){
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
async function test(){
  let temple = await sleep1(1000)
  console.log(1);
  return temple
}

test()
