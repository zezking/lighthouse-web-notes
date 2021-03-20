const arr=[21, 25, 32, 45, 46, 56]

const findSumofTWo=(arr, sum)=>{
  for(let i=0; i<arr.length; i++){
      for (let j=0; j<arr.length; j++){
          if(arr[i]+arr[j]===sum){
              return true
          }
      }
  }
}

console.log(findSumofTWo(arr,71))