const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

date.textContent = today.getDate().toString().padStart(2, "0");
day.textContent = today.toLocaleString("en-US", { weekday: "long" });
month.textContent = today.toLocaleString("en-US", { month: "long" });
year.textContent = today.getFullYear();
