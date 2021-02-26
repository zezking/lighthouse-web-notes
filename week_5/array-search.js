const search=(array, item)=>{
    let index=null;
    for (let i=0; i < array.length; i++){
        if(item===array[i]){
            index=i;
            break;
        }
    }
    return index
}

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



const searchBinary=(array, item)=>{
    let min=0;
    let max=array.length-1

    while (min<max){
        let guessIndex=Math.floor((min+max)/2) 

        if (array[guessIndex]<item){
            min=guessIndex+1
        } else if(array[guessIndex]>item){
            max=guessIndex-1
        } else {
            return `The number is at ${guessIndex}`;
        }
    }

    return `We did not find the number`;

}
const array= [1,2,3,4,5,6,7,8,9];

console.log(linearSearch(array, 4))

