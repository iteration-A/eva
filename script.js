const HOUR = document.querySelector("#Hour tspan");
const MINUTE = document.querySelector("#Minute tspan");
const SECOND = document.querySelector("#Second tspan");

const RED = "#BD1900";
const YELLOW = "#E0AD41";

// resize svg
const SVG_FULL = document.getElementById("svg_full");
window.addEventListener("pageshow", () => {
  // const height = document.body.scrollHeight;
  // const width = document.body.scrollWidth;
  // SVG_FULL.setAttribute('viewBox', `0 0 ${width} ${height}`);
  // SVG_FULL.setAttribute('height', height);
  // SVG_FULL.setAttribute('width', width);

  // fix offset
  document.querySelector("#Sep2 tspan").setAttribute("y", "680");
  document.querySelector("#Sep2 tspan").setAttribute("x", "1330");
  document.querySelector("#Sep2").setAttribute("style", "font-size: 110px");
  console.log("what");
});

const updateClock =
  (format = 12) =>
  () => {
    const [_date, time] = new Date()
      .toLocaleString("en-US", { hour12: format === 12 })
      .split(" ");

    const [h, m, s] = time.split(":");
    HOUR.textContent = String(h).padStart(2, "0");
    MINUTE.textContent = String(m).padStart(2, "0");
    SECOND.textContent = String(s).padStart(2, "0");
  };

setInterval(updateClock(), 1000);
