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
