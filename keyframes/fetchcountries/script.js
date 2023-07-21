console.log("Greetings developers!");

const totalNumberOfCountries = document.querySelector("#countries__length");
const countriesList = document.querySelector(".countries__container");

const url = "https://restcountries.com/v2/all";

const fetchCountries = async () => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    totalNumberOfCountries.innerHTML = data.length;

    displayCountries(data);
  } catch (error) {
    console.log(error.message);
  }
};

// let country;

const displayCountries = (countries) => {
  countries.map((country, index) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = country.name;

    return countriesList.appendChild(countryDiv);
  });
};

fetchCountries();
