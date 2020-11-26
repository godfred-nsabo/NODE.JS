// Aysnc Code nad Promise
/*const fetchData = callback => {
  setTimeout(() => {
    callback("Completed");
  }, 150);
};
setTimeout(() => {
  console.log("Timer is done!");
  fetchData((text) => {
    console.log(text);
  });
}, 300);

console.log("Hello");
console.log("Hi");*/

// implementing Promise and Async
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Completed");
    }, 150);
  });
  return promise;
};
setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text1) => {
      console.log(text1);
    });
}, 300);

console.log("Hello");
console.log("Hi");
