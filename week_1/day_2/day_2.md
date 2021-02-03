# Notes

## Refactoring Code

- write down in pesudo code
- think about error case and exit case

## Joining Concepts

### Eloquent Javascript

- dont write similar code multiple times (I always do)
- longer codes are prone to mistakes
- make sure the function has a nice, obivious and shorter name
- function print value is called side-effects
- function that returns value is called return value
- Conventions for Naming Function
  - name function beginning with action words
- Give your functions precise verb/action based names
- Use camelCasedNames (like this one)
- Properly indent the function code
- Functions should focus on a single task: returning a value or causing a side effect. Break your function into additional smaller functions if you find it doing two or more things
  - One single task could be to compute and return a value (eg: zeroPad)
  - Another single task could be to perform a side effect such as logging a message to the screen (eg: printFarmInventory)
- Data needed by Functions should be passed in as parameters/arguments (i.e. local scope) instead of being accessed directly
