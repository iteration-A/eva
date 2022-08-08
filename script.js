const HOUR = document.querySelector(".hour");
const MINUTE = document.querySelector(".minute");
const SECOND = document.querySelector(".second");

const RED = "#BD1900";
const YELLOW = "#E0AD41";

const offsetOne = () => {
  for (const item of [HOUR, MINUTE]) {
    if (item.textContent.startsWith("1")) {
      item.style.transform = "translateX(-80px)";
      continue;
    }

    item.style.transform = "translateX(0)";
  }
};

const updateClock =
  (format = 12) =>
  () => {
    const date = new Date();
    const [_date, time] = date
      .toLocaleString("en-US", { hour12: format === 12 })
      .split(" ");

    const [h, m, s] = time.split(":");

    HOUR.textContent = String(h).padStart(2, "0");
    MINUTE.textContent = String(m);
    SECOND.textContent = String(s);

    offsetOne();
  };

// ╭──────────────────────────────────────────────────────────╮
// │                          EVENTS                          │
// ╰──────────────────────────────────────────────────────────╯
let INTERVAL = setInterval(updateClock(), 1000);

// const changeColors = (color) => () => {
// 	const colorToSearch = color === RED ? YELLOW : RED;
// 	console.log(colorToSearch)
//   const text = document.querySelectorAll(`[fill="${colorToSearch}"]`);
//   const borders = document.querySelectorAll(`[stroke="${colorToSearch}"]`);

//   for (const element of text) {
//     element.style = `fill: ${color}`;
//   }

//   for (const element of borders) {
//     element.style = `stroke: ${color}`;
//   }

//   for (const element of [HOUR, MINUTE, SECOND]) {
//     element.style = `color: ${color}`;
//   }

//   clearInterval(INTERVAL);
// };

// const slow = () => {
// 	clearInterval(INTERVAL);
//   INTERVAL = setInterval(updateClock(), 2000);
//   changeColors(YELLOW)();
// };

// const normal = () => {

// }

// const racing = () => {

// }

// document.getElementById("stop").addEventListener("click", changeColors(RED));
// document.getElementById("slow").addEventListener("click", slow);
// document
//   .getElementById("normal")
//   .addEventListener("click", normal);
// document
//   .getElementById("racing")
//   .addEventListener("click", racing);
