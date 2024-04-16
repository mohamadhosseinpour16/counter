// select dom node
let span = document.querySelector("span");
let buttons = document.querySelectorAll("button");
// var
let counter = (span.textContent = 0);

// functions
function add() {
  counter++;
  span.textContent = counter;
}
function minus() {
  counter--;
  span.textContent = counter;
}
function odd() {
  if (counter % 2 === 1) {
    add();
  }
}

// event
for (const btn of buttons) {
  if (btn.textContent === "add") btn.addEventListener("click", add);
  if (btn.textContent === "minus") btn.addEventListener("click", minus);
  if (btn.textContent === "add when odd") btn.addEventListener("click", odd);
}
