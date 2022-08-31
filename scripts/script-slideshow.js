import Slide from "./components/Slide.js";

/* PROJECT1 COMMENT */
let counter1, timer1, manualNav1;
const projectOneImgArr1 = [
  "./images/Turtle'sBarAndGrill/turtle's bar and grill (1).PNG",
  "./images/Turtle'sBarAndGrill/turtle's bar and grill (2).PNG",
  "./images/Turtle'sBarAndGrill/turtle's bar and grill (3).PNG",
  "./images/Turtle'sBarAndGrill/turtle's bar and grill (4).PNG",
  "./images/Turtle'sBarAndGrill/turtle's bar and grill (5).PNG",
  "./images/Turtle'sBarAndGrill/turtle's bar and grill (6).PNG",
];

Slide.activate(
  counter1,
  timer1,
  manualNav1,
  projectOneImgArr1,
  "1",
  "odd",
  "Turtle's Bar & Grill",
  "A website built for a real local sports bar.<br> DOM manipulation, Intersection Oberver API. <br> Used JS class with static methods to create UI components and gallery lightbox. <br> Used local storage to keep user data persistent.",
  "HTML, CSS, Vanilla JavaScript",
  "https://stellar-elf-512e39.netlify.app/",
  "https://github.com/TimZZZ19/Turtle-s"
);

/* PROJECT2 COMMENT */
let counter2, timer2, manualNav2;
const projectOneImgArr2 = [
  "./images/FoodApp2/FoodApp2 (1).png",
  "./images/FoodApp2/FoodApp2 (2).png",
  "./images/FoodApp2/FoodApp2 (3).png",
];

Slide.activate(
  counter2,
  timer2,
  manualNav2,
  projectOneImgArr2,
  "2",
  "even",
  "FoodApp2",
  "A fictional online food-ordering App.<br> Managed Frontend data with Context API. <br> Organized styles using CSS modules.<br> Used Firebase Realtime Database for storing App and user data.",
  "React, Firebase",
  "https://cute-cuchufli-1f8bd6.netlify.app/",
  "https://github.com/TimZZZ19/FoodOrderApp2"
);

/* PROJECT3 COMMENT */
let counter3, timer3, manualNav3;
const projectOneImgArr3 = [
  "./images/CodingGuru/CodingGuru (1).PNG",
  "./images/CodingGuru/CodingGuru (2).PNG",
];

Slide.activate(
  counter3,
  timer3,
  manualNav3,
  projectOneImgArr3,
  "3",
  "odd",
  "Coding Guru",
  "Landing page for a fictional coding bootcamp. <br> Micmicked Coding Dojo's landing page. <br> My first tailwind project.",
  "HTML, Tailwind, JavaScript",
  "https://jazzy-lollipop-ed99d3.netlify.app/",
  "https://github.com/TimZZZ19/CodingGuru",
  false
);
