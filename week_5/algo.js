var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const linearSearch=(num, primeNum)=>{
    let min=0;
    let max=num.length-1
    
    while (min<max){
        let guess=Math.floor((min+max)/2)
        if (num[guess]<primeNum){
            min=guess+1
        } else if(num[guess]>primeNum){
            max=guess-1
        } else {
            return guess
        }
    }
    return false;
}

 console.log(linearSearch(primes,16))