const CLOCK = document.querySelector("#Clock tspan");
const SECONDS = document.querySelector("#Second tspan")

const RED = "#BD1900";
const YELLOW = "#E0AD41";

const updateClock =
  (format = 12) =>
  () => {
    const [_date, time] = new Date()
      .toLocaleString("en-US", { hour12: format === 12 })
      .split(" ");

    const [h, m, s] = time.split(":");
		const hour = String(h).padStart(2, "0");
		const minute = String(m).padStart(2, "0");
		const second = String(s).padStart(2, "0");
		CLOCK.textContent = `${hour}:${minute}`;
		SECONDS.textContent = String(second);
  };

setInterval(updateClock(), 1000);
