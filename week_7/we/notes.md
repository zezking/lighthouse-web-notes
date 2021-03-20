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

## Building a testing and quality driven culture

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
  - SonarCloud Code Climate Codacy for quality
  - Control flow
    - No force pushing
    - requires team participation
  - Catch regressions before it happens
  - minimize technical debt and maintenance overhead
  - Peer reviews to create learning opportunity
  - Testable is better code
    - Cleaner separation of different functionality
    - Fewer side effects
      - Mocking sucks
        - [What is mocking](https://stackoverflow.com/questions/2665812/what-is-mocking)
    - Better APIs because edge cases are tested for
- Implementation
  - make easy things
  - Intergrate checks into your workflow
    - intergrate tests once PR (private repo) is open
  - Built-in coaching to improve quality
    - Coadcy
  - Trying to make the learning curve as shallow as possible
  - A unified API makes testing approachable
  - Having testing prompts
    - Provide tested code to start with
  - Internal Training is key
    - Hackatons to add tests to older code
    - workshops
    - Cross-team code reviews to share knowledge
    - Compile best practices into interal docs
    - Coach the team on writing more testable code
