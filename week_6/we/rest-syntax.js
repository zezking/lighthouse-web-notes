const profile = {
  firstName: "Sori",
  lastName: "Han",
  occupation: "actor",
};

const { lastName, ...rest } = profile;

console.log(lastName);
console.log(rest);
