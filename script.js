
const main = document.querySelector("#details");

const fullNameTag = document.createElement("h1");
const heightTag = document.createElement("h2");
const countryTag = document.createElement("h3");

const fullName = document.createTextNode("My name is Jubreel Adebayo");
const height = document.createTextNode("My heigh is 1.79m");
const country = document.createTextNode("I am from NIGERIA");

fullNameTag.appendChild(fullName);
heightTag.appendChild(height);
countryTag.appendChild(country);

main.appendChild(fullNameTag);
main.appendChild(heightTag);
main.appendChild(countryTag);