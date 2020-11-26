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

//simply written the arrow function as
const sum = (x, y) => x + y;

// with one argument
const sum1 = (z) => z + 2;

console.log(add(1, 2));
console.log(sum(1, 3));
console.log(sum1(14));
console.log(summariseUser(name, age, hasHobbies));

// Working with Objects

const person = {
  name: "Goddey",
  age: 29,
  greet: () => {
    console.log("Hello, I am " + this.name);
  },
  greet1: function () {
    console.log("Hello, I am " + this.name);
  },
  greet2() {
    console.log("Hello, I am " + this.name);
  },
};

person.greet();
person.greet1();
person.greet2();

//Arrays

const hobby = ["sports", "cooking"];
for (let hobi of hobby) {
  console.log(hobi);
}

console.log(hobby.map((hoby) => "Hobby: " + hoby));

// Reference Types

hobby.push('Programming ', 'Mathematics');
console.log(hobby);

// Rest and Spreed Operator

