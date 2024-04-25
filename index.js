const authorName = document.querySelector("#authorName");
const quote = document.querySelector("#quote");
const generateBtn = document.querySelector("#generateBtn");
const apiKey = "wzX+JTp+B3AaV1T8in9Mvw==fyNtHJtDFQtZHfLT";

const getData = () => {
  fetch("https://api.api-ninjas.com/v1/quotes", {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      authorName.textContent = data[0].author;
      quote.textContent = data[0].quote;
    });
};


generateBtn.addEventListener("click", ()=> {
    getData();
});