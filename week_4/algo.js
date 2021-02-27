var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
function search(array, item) {
 let min=0;
 let max=array.length-1
     while (true){
         let middleIndex=Math.floor((min+max)/2)
         let currentItem=array[middleIndex]

         if(item===currentItem){
             return middleIndex
         } else if(currentItem<item){
             min=middleIndex+1
         } else if (currentItem>item){
             max=middleIndex-1
         }

         if (min>max){
             return null;
         }

     }
 
  }

 console.log(search(primes,43))