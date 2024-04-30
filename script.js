const myDate = new Date;
let currentYr = myDate.getFullYear();
let currentMth = myDate.getMonth() + 1;
let currentDay = myDate.getDate();


let birthYr = document.querySelector("#year").value;
let birthMth = document.querySelector("#month").value;
let birthDay = document.querySelector("#day").value;


const calcBtn = document.getElementById("calc-btn");
console.log(birthYr)