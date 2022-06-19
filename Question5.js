/*Write a function that gets JSON from the following link
(https://jsonplaceholder.typicode.com/posts) and returns an object with id = 5.*/

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((result) => result.json())
  .then((output) => {
    const foundObjectById = output.find((object) => object.id === 5);
    console.log(foundObjectById);
  })
  .catch((err) => console.error(err));
