function one() {
  console.log("one was called");
  return false;
}
function two() {
  console.log("two was called");
  return false;
}

if (one() && two()) {
  console.log("Here we go!");
}

// This will cause an error if `users` is not an array
function findById(users, id) {
  return users.find((item) => item.id === id);
}

// Now we are returning the person if `users` is an array
// If `users` is not an array, we the value whatever is before
// && which is `false` in that case
function findById(users, id) {
  return Array.isArray(users) && users.find((item) => item.id === id);
}
