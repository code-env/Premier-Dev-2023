console.log("Greetings developers!");

//CALLBACKS

const doPromise = (params) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    params(false, skills);
  }, 2000);
};

const callback = (err, result) => {
  if (err) {
    return console.log(err);
  }

  return console.log(result);
};

doPromise(callback);

//PROMISE CONSTRUCTOR

//syntax
const promise = new Promise((resolve, reject) => {
  resolve("success");
  reject("failure");
});

//promise

const doSomething = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];

    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Something wrong happened");
    }
  }, 2000);
});

doSomething
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

//FETCK API
const url = "https://restcountries.com/v2/all";

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//async and await

const square = async function (n) {
  const value = n * n;

  return value;
};

console.log(square(25));

const fetchData = async () => {
  try {
    const res = await fetch(url);

    const countries = await res.json();

    console.log(countries);
  } catch (error) {
    console.log(error);
  }
};

fetchData();

///
