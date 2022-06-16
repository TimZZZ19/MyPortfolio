let counter = 1;
let timer = getTimer(counter);

const manualNavigation = document.querySelector(".radio-btns");
manualNavigation.addEventListener("click", (e) => {
  clearInterval(timer);
  const label = e.target.getAttribute("for");
  if (label === "radio1") counter = 1;
  if (label === "radio2") counter = 2;
  if (label === "radio3") counter = 3;
  if (label === "radio4") counter = 4;
  if (label === "radio5") counter = 5;
  if (label === "radio6") counter = 6;

  timer = getTimer(counter);
});

function getTimer(counter) {
  return setInterval(() => {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 6) {
      counter = 1;
    }
  }, 3000);
}
