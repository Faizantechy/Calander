const month = document.querySelector(".month");
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const year = document.querySelector(".year");

let DATE = new Date();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

month.innerHTML = monthNames[DATE.getMonth()];

const daysName = [
  "SUnday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

day.innerHTML = daysName[DATE.getDay()];

date.innerHTML = DATE.getDate();
year.innerHTML = DATE.getFullYear();
