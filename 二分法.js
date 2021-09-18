const arr = [1,4,5,6,7,8,9,10,11]

function erFen(arr, num){
  const mid = Math.floor(arr.length /2)
  if(num < arr[mid]){
    let newArr = arr.slice(0,mid)
    return erFen(newArr, num)
  }else if( num > arr[mid]){
    let newArr = arr.slice(mid)
    return erFen(newArr, num)

  }
  if(num === arr[mid]){
    return arr[mid]
  }
}

console.log(erFen(arr, 4))