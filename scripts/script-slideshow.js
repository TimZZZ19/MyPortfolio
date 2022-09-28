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
const project1Description = [
  "A website built for a real local sports bar.",
  "DOM manipulation, Intersection Oberver API.",
  "Used JS class with static methods to create UI components and gallery lightbox.",
  "Used local storage for data persistence.",
];

Slide.activate(
  counter1,
  timer1,
  manualNav1,
  projectOneImgArr1,
  "1",
  "odd",
  "Turtle's Bar & Grill",
  project1Description,
  "HTML, CSS, Vanilla JavaScript",
  "https://turtles-bar-and-grill.netlify.app/",
  "https://github.com/TimZZZ19/Turtle-s"
);

/* PROJECT2 COMMENT */
let counter2, timer2, manualNav2;
const projectOneImgArr2 = [
  "./images/FoodApp2/FoodApp2 (1).png",
  "./images/FoodApp2/FoodApp2 (2).png",
  "./images/FoodApp2/FoodApp2 (3).png",
];

const project2Description = [
  "A fictional online food-ordering App.",
  "Managed states with Context API.",
  "Organized styles using CSS modules.",
  "Used Firebase Realtime Database for storing App and user data.",
];

Slide.activate(
  counter2,
  timer2,
  manualNav2,
  projectOneImgArr2,
  "2",
  "even",
  "FoodApp2",
  project2Description,
  "React, Firebase",
  "https://food-order-react-app2.netlify.app/",
  "https://github.com/TimZZZ19/FoodOrderApp2"
);

/* PROJECT3 COMMENT */
let counter3, timer3, manualNav3;
const projectOneImgArr3 = [
  "./images/CodingGuru/CodingGuru (1).PNG",
  "./images/CodingGuru/CodingGuru (2).PNG",
];
const project3Description = [
  "Landing page for a fictional coding bootcamp.",
  "Micmicked Coding Dojo's landing page.",
  "My first tailwind project.",
];

Slide.activate(
  counter3,
  timer3,
  manualNav3,
  projectOneImgArr3,
  "3",
  "odd",
  "Coding Guru",
  project3Description,
  "HTML, Tailwind, Vanilla JavaScript",
  "https://coding-guru.netlify.app/",
  "https://github.com/TimZZZ19/CodingGuru",
  true
);

/* PROJECT4 COMMENT */
let counter4, timer4, manualNav4;
const projectOneImgArr4 = [
  "./images/PigGame/PigGame.png",
  "./images/PigGame/PigGame1.png",
  "./images/PigGame/PigGame2.png",
];
const project4Description = [
  "A simple dice game.",
  "Data management with useReducer.",
  "Online multi-player mode with Socket.io (<i>still under development</i>)",
];

Slide.activate(
  counter4,
  timer4,
  manualNav4,
  projectOneImgArr4,
  "4",
  "even",
  "Pig Game",
  project4Description,
  "React, Socket.io",
  "https://pig-game-with-multiplayer-mode.netlify.app/",
  "https://github.com/TimZZZ19/Pig-game-recreation-with-React",
  true
);
/* PROJECT5 COMMENT */
let counter5, timer5, manualNav5;
const projectOneImgArr5 = [
  "./images/TodoList/TodoList (1).png",
  "./images/TodoList/TodoList (2).png",
];
const project5Description = [
  "A simple Todo List.",
  "Data persistence using local storage.",
  "Skillful uses of useEffect hook",
];

Slide.activate(
  counter5,
  timer5,
  manualNav5,
  projectOneImgArr5,
  "5",
  "odd",
  "Tim's Todo List",
  project5Description,
  "React",
  "https://tims-todo-list.netlify.app/",
  "https://github.com/TimZZZ19/TodoList",
  true
);
