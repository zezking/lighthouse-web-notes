# Notes

## User Testing

### Why

- it saves testing time (by not having to perform manual tests over and over)
- it saves debugging time (by catching bugs earlier)
- it makes it easier to program (because we don't need to keep the entire - - - application in our heads, just the part that we're working on... if we break - something, our tests will let us know)
- it makes it easier to come back to a program after some time (programmers - - forget things, but tests do not)
- it makes it easier to work together (we wrote some widget and know how it - - works, but our team-mates probably don't; our tests will catch bugs - - - introduced by others on our team, and vice versa)
- it acts as documentation (readings tests is a great way to learn about how - code is meant to be used)
- it improves the quality of our code (writing code that is easy to test often requires us to change how our code is structured -- for the better)

### What is Happy Path

- happy path.” The happy path is the path through a system where everything works, the data is correct, the system stays up, and the users are well-behaved. We tend to test the happy path first because we understand how the system should function and want to ensure that the basic features should work.

- #### This results in testing scenarios like this

  - User selects an item and adds it to their cart
  - User enters billing data
  - User enters shipping data
  - User clicks “Check Out”
  - Transaction is processed

- #### Revrse Rule of Happy Path

  - 20% of your time on the happy path; 80% of your time off of it.

- #### 3 different kind of testing
  - unit testing
    - testing small part of a system
  - Intergration testing
    - testing different parts working together
  - Function testing
    - use automated user testing to mimic real users and testing the fucntions. it's very comeplex and slow
