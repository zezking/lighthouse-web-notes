const person = ["Sori", "Han"];

const profile = [...person, "developer"];

console.log(profile);

const person2 = {
  firstName: "Enze",
  LastName: "Zhao",
};

const profile2 = { ...person2, title: "developer" };

console.log(profile2);
