"use strict";

// // Задание 1

// const url = "https://www.boredapi.com/api/activity/";

// let btnEl = document.querySelector(".btnGet");

// // btnEl.addEventListener("click", () => {
// //   fetch(url)
// //     .then((responce) => responce.json())
// //     .then((json) => {
// //       const data = json;
// //       doSomething(data);
// //     })
// //     .catch((error) => console.log("Erroe"));
// // });

// function doSomething(value) {
//   const divEl = document.createElement("div");
//   divEl.textContent = value.activity;
//   document.body.appendChild(divEl);
// }

// async function getData(url) {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
// }

// btnEl.addEventListener("click", async () => {
//     try {
//         const data = await getData(url);
//         doSomething(data);
//     } catch (error) {
//         console.log("Error");
//     }
// });

// // Задание 2
// const apiKey = "VG7hcoFMcSvGDhlJh3ylikHVk7Q8Q4Op8ZFDomGN";
// const url =
//   "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&count=10";

// async function getData(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// }

// try {
//   const data = await getData(url);

//   let bodyEl = document.querySelector("body");
//   data.forEach((element) => {bodyEl.insertAdjacentHTML("beforeend",
//     `<figure>
//         <img src="${element.url}" alt="Pictire">
//         <figcaption>${element.explanation}</figcaption>
//     </figure>`)});
// } catch (error) {
//   console.log("Error");
// }
