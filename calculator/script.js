// Calculator Logic

const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  if (display.value === "") return;

  try {
    display.value = Function("return " + display.value)();
  } catch {
    display.value = "Error";
    setTimeout(() => (display.value = ""), 1000);
  }
}
