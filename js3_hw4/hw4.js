"use strict";

// Задание 1
// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.

const urlTask1 = "https://jsonplaceholder.typicode.com/users/";

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

let contentElement = document.querySelector(".content");
let isDataDisplayed = false;

function constract(value) {
  const userDataContainer = document.createElement("div");
  userDataContainer.className = "user_container";

  const userCheckbox = document.createElement("input");
  userCheckbox.className = "user_checkbox";
  userCheckbox.type = "checkbox";
  userCheckbox.id = value.id;
  userDataContainer.appendChild(userCheckbox);

  const userName = document.createElement("h5");
  userName.className = "user_name";
  userName.innerHTML = value.name;
  userDataContainer.appendChild(userName);

  const userData = document.createElement("div");
  userData.className = "user_data";
  userData.insertAdjacentHTML(
    "beforeend",
    `
    <table>
        <tbody>
            <tr>
                <td>Имя пользователя</td>
                <td>${value.username}</td>
            </tr>
            <tr>
                <td>Адрес электронной почты</td>
                <td>${value.email}</td>
            </tr>
            <tr>
                <td>Почтовый адрес</td>
                <td>${value.address.zipcade}, город ${value.address.city}, улица ${value.address.street}, ${value.address.suite}</td>
            </tr>
            <tr>
                <td>Номер телефона</td>
                <td>${value.phone}</td>
            </tr>
            <tr>
                <td>Сайт</td>
                <td>${value.website}</td>
            </tr>
            <tr>
                <td>Организация</td>
                <td>${value.company.name}</td>
            </tr>
        </tbody>
    </table>`
  );
  userDataContainer.appendChild(userData);

  contentElement.appendChild(userDataContainer);
}

try {
  const data = await getData(urlTask1);
  isDataDisplayed = data.length > 0 ? true : false;
  data.forEach((element) => {
    constract(element);
  });
} catch (error) {
  console.log("Error");
}

let delButtonContainer = document.createElement("div");
delButtonContainer.className = "button_delete_container";
let delButton = document.createElement("button");
delButton.className = "button_delete";
delButton.innerHTML = "Delete selected users";
delButtonContainer.appendChild(delButton);
contentElement.parentElement.appendChild(delButtonContainer);

delButton.addEventListener("click", () => {
  if (isDataDisplayed) {
    let selectedUsers = document.querySelectorAll(".user_checkbox");
    for (let i = 0; i < selectedUsers.length; i++) {
      console.log(selectedUsers[i]);
      if (selectedUsers[i].checked) {
        selectedUsers[i].parentElement.remove();
      }
    }
  }
});


// Задание 2
// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const dogsBandSize = 10;
const delay = 3000;
const urlTask2 = "https://dog.ceo/api/breeds/image/random/" + dogsBandSize;

let dogHouse = document.createElement("div");
dogHouse.className = "dog_container";
contentElement.parentElement.appendChild(dogHouse);

try {
  const dogs = await getData(urlTask2);
  let i = 0;
  let dogShow = setTimeout(function displayDog() {
    if (i < dogsBandSize) {
      dogHouse.insertAdjacentHTML(
        "beforeend",
        `<div class="dog_box" style="background-image: url(${dogs.message[i]})">
            </div>`
      );
      i++;
      dogShow = setTimeout(displayDog, delay);
    }
  });
} catch (error) {
  console.log("Error");
}
