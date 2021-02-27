# Notes for Algorithm
```
Each of the following are elementary operations:

let number = 0;
number += 2;
console.log(number);
We can count up all of the elementary operations that an algorithm performs and call that its running time. So if a an algorithm performs n elementary operations, we say the running time is n.
```
## what's the running time of the following operations?
```
let result = 0;

for (let i = 0; i < array.length; i++) {
  let number = array[i];
  result += number;
}

console.log(result);
```
## what's the running time of the following operations?
```
let result = 0; // 1

for (
  let i = 0; // 1
  i < array.length; // n + 1
  i++ // n
) {
  let number = array[i]; // n
  result += number; // n
}

console.log(result); // 1

```
## Linear vs Logarithmic Algorithms


In mathematics, the logarithm is the inverse function to exponentiation. That means the logarithm of a given number x is the exponent to which another fixed number, the base b, must be raised, to produce that number x


## Big O Notation

Big O notation, written as O(), describes how the number of steps in an algorithm scales relative to its input.
How time scales with respect to some input variables


When we evaluate an algorithm using Big O notation, there are three main things to remember:

We only care about arbitrarily large input.
What does the run time of binary search look like when we give it an array of one million items?
We drop the non-dominant terms.
When our algorithm had a running time of (n^2+n)/2, it was the n^2 that was hurting us. So we'll just forget about everything else.
We drop constant terms.
If you graph (n^3)/2 or (n^3)*2, it has pretty much the same curve as n^3, so let's just get rid of the constant 2.



```
2n + 3 will grow linearly, O(n)
100n^2 will grow exponentially, O(n^2)
log n + 1000000000 will grow logarithmically, O(log n)
```

- ### Constant O(1)
  ```
    array[2];
  ```

  and
  ```
  array[2] + array[3] + array[4];
  ```
  It will not be affected no matter how big the array is
  - Exmaple
    Check if the last element in an array is even. Jump directly to the last element in the array and do some math. Even if it's a lot of math that takes a while, increasing the size of the array will not affect the amount of time this takes
    
    Tell me how many pages are in a phone book. Just open the last page and read the page number


- ### Linear O(n) 
  The following algorithm is linear, because adding one more item to the array increases the runtime by a constant 100.


  ```
  for (item of array) {
  // perform 100 operations
  }
  ```

  
  ```
  function sumAllNumberInArray(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    result += number;
  }

  return result;
  }
  ```
- ### Quadratic O(n^2) 
  If the number of operations that an algorithm has to perform is directly proportional to the square of the size of the input, then that algorithm runs in quadratic time.

  The following algorithm is quadratic, because adding one more item to the array increases the runtime by n*100.

  ```
  for (item of array)   {
  for (item of array) {
    // perform 100 operations
    }
  }
  ```

  
  ```
  function arrayContainsSum(array, sum) {

  for (let i = 0; i < array.length; i++) {
    const element1 = array[i];

    for (let ii = 0; ii < array.length; ii++) {

      const element2 = array[ii];

      if (element1 + element2 === sum) {
        return true;
      }
    }
  }
  return false;
    }
  }
  ```
- ### Logarithmic O(log n)
  If the number of operations that an algorithm has to do is directly proportional to the logarithm of the size of the input, then that algorithm runs in logarithmic time.
  The following code is an example of a logarithmic algorithm, because doubling the size of the input only increases the runtime by only one.
  ```
   let i = array.length;
  while(i > 0) {
  i = i / 2;
  }
  ```

  
  ```
  function binarySearch(array, item) {
  let min = 0;
  let max = array.length - 1;

  while (true) {
    const middleIndex = Math.floor((min + max)/2.0);
    const currentItem = array[middleIndex];

    if (currentItem === item) {
      return middleIndex;
    } else if (currentItem < item) {
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1;
    }

    if (min > max) {
      return null;
    }
    }
  }
  ```
## conclusion


Big O notation describes how the number of steps in an algorithm scales relative to its input.

When we describe an algorithm using Big O notation, we:

- Only care about arbitrarily large input.
- Drop the Non-Dominant Terms.
- Drop Constants.

Some of the more common Big O running times are:

- Logarithmic O(log n)
- Quadratic O(n^2)
- Linear O(n)
- Constant O(1)

## Google Interview
- ask for clarification
- thought out loud
- think through a better solution
- after you implement your solution, test your solution with examples, and do a walkthrough


## Big O Rules
- different steps get added
  - you will add steps together
    - O(a+b) 
- drop constants
- different inputs have different variables
  - if there is a nested loops with two different arrays, don't say it has a Big O of a times b.
- drop non-dominant terms
  - O(n2) <= O(n+n2) <= (n2 + n2) so the big O run times will just be O(n2)