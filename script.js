"use strict";

//1) Написать две функции для реализации AJAX запросов: getData и sendData
//3) Реализовать получение данных из файла .json (прикреплен под видео)  через функцию getData
//4) После получения объекта из файла .json должна произойти отправка данных
//(которые мы получили из файла .json) на URL через функцию sendData
//https://jsonplaceholder.typicode.com/posts
//5) Ошибки должны быть обработаны
//При загрузке страницы сперва должно произойти получение данных из файла и после этого
//сразу отправка

const getData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      sendData(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const sendData = (newData) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

getData("db.json");
