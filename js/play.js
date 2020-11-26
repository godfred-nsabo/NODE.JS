var name = "GOdfred";
var age = 29;
var hasHobbies = false;

console.log(name);

const summariseUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
};

const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));
console.log(summariseUser(name, age, hasHobbies));
