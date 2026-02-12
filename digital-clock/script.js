const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const toggleBtn = document.getElementById("themeToggle");

const body = document.body;

/* default theme */
body.classList.add("dark");

/* CLOCK FUNCTION */
function updateClock() {
  const now = new Date();

  // TIME
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  timeEl.textContent = `${hours}:${minutes}:${seconds}`;

  // DATE
  const options = { weekday: "long", month: "short", day: "numeric" };
  dateEl.textContent = now.toLocaleDateString("en-US", options);
}

/* update every second */
setInterval(updateClock, 1000);
updateClock();

/* THEME TOGGLE */
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
});
