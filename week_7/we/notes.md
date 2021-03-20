# notes

## Rule: Write clean code that works

- Write new code only if an automated test has failed
  - Eliminate duplication

## Red Green Refactor

- Red
  - Write a small test that doesn't pass.
- Green
  - Do the minimal amount of work to make the test pass.
- Refactor
  - Improve the code, continuing to ensure all tests still pass.

## Test Driven Development & Refactoring

- define a function that won't pass the test
- describe a test for that function
  - define what the function should do
  - define what the test should not do
  - define what the test should include certain cases
- Checkout 'matcher' documentations for Jest
- Refactor codes after you pass your tests and ensure the tests will be passed

### Building a testing and quality driven culture

- if code isn't tested, it's just guessing
- even smaller codebases have lots of edge cases
- manual quality assurance doesn't catch everything
- A battle-tested strategy
  - must have pull requests
  - run test automatically
  - meet testing requirements
  - meet quality guidelines
  - must be approved by peer
  - test requirments
    - built successful
    - pass all tests
    - converage thresholds must be met for new code
  - quality guidelines
    - simple and easy to read code
    - problembatic patterns
    - no duplicate code
    - security vulneratbilities
- automated testing process
  - Linters and IDE plugins help code as it's being written
  - Husky and Git hooks to check changes pre-push
  - TravisCI and Jenkins to build and test PRs
