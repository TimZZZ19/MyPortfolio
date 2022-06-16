// slideshow for project1 COMMENT
let counter1 = 1;
let timer1 = getTimer(counter1, "project1", 6);

const manualNavigation1 = document.querySelector(".radio-btns--project1");
manualNavigation1.addEventListener("click", (e) => {
  clearInterval(timer1);
  const label = e.target.getAttribute("for");
  if (label === "project1-radio1") counter1 = 1;
  if (label === "project1-radio2") counter1 = 2;
  if (label === "project1-radio3") counter1 = 3;
  if (label === "project1-radio4") counter1 = 4;
  if (label === "project1-radio5") counter1 = 5;
  if (label === "project1-radio6") counter1 = 6;

  timer1 = getTimer(counter1, "project1", 6);
});

// slideshow for project2 COMMENT

let counter2 = 1;
let timer2 = getTimer(counter2, "project2", 3);

const manualNavigation2 = document.querySelector(".radio-btns--project2");
manualNavigation2.addEventListener("click", (e) => {
  clearInterval(timer2);
  const label = e.target.getAttribute("for");
  if (label === "project2-radio1") counter2 = 1;
  if (label === "project2-radio2") counter2 = 2;
  if (label === "project2-radio3") counter2 = 3;

  timer2 = getTimer(counter2, "project2", 3);
});

// slideshow for project2 COMMENT

let counter3 = 1;
let timer3 = getTimer(counter3, "project3", 4);

const manualNavigation3 = document.querySelector(".radio-btns--project3");
manualNavigation3.addEventListener("click", (e) => {
  clearInterval(timer3);
  const label = e.target.getAttribute("for");
  if (label === "project3-radio1") counter3 = 1;
  if (label === "project3-radio2") counter3 = 2;
  if (label === "project3-radio3") counter3 = 3;
  if (label === "project3-radio4") counter3 = 4;

  timer3 = getTimer(counter3, "project3", 4);
});

// utility function COMMENT
function getTimer(counter, project, uppperLimit) {
  return setInterval(() => {
    document.getElementById(project + "-radio" + counter).checked = true;
    counter++;
    if (counter > uppperLimit) {
      counter = 1;
    }
  }, 3000);
}
