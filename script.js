const CLOCK = document.querySelector("#Clock tspan");
const SECONDS = document.querySelector("#Second tspan")

const RED = "#BD1900";
const YELLOW = "#E0AD41";

let RACE_INTERVAL = null;

const TIME = [0, 5, 59];

let WARNED = false;

const updateClock = (h, m, s) => {
		const hour = String(h).padStart(2, "0");
		const minute = String(m).padStart(2, "0");
		const second = String(s).padStart(2, "0");
		CLOCK.textContent = `${hour}:${minute}`;
		SECONDS.textContent = second;
}

const warning = () => {
	const blocks = document.querySelectorAll(`[fill="${YELLOW}"]`);
	const lines = document.querySelectorAll(`[stroke="${YELLOW}"]`);
	WARNED = true;

	for (const element of blocks) {
		element.setAttribute('fill', RED);
	}

	for (const element of lines) {
		element.setAttribute('stroke', RED);
	}

	document.body.style = `background: ${RED}`;
};
const death = () => {
	alert('you are dead');
};

const race = () => {
	let [minutes, seconds, miliseconds] = TIME;

	RACE_INTERVAL = setInterval(() => {
		miliseconds--
		if (miliseconds < 1) {
			miliseconds = 59;
			seconds--
		}

		if (seconds < 1) {
			seconds = 59;
			minutes--
		}

		if (minutes < 0) {
			minutes = 0;
			seconds = 0;
			miliseconds = 0;
			clearInterval(RACE_INTERVAL);
			RACE_INTERVAL = null;
			setTimeout(death, 100);
		}

		if (minutes < 1 && !WARNED) {
			warning();
		}

		updateClock(minutes, seconds, miliseconds);
	}, 1);
}

// const tickClock =
//   (format = 12) =>
//   () => {
//     const [_date, time] = new Date()
//       .toLocaleString("en-US", { hour12: format === 12 })
//       .split(" ");

//     const [h, m, s] = time.split(":");
// 		updateClock(h, m, s);
//   };
// setInterval(tickClock(), 1000);
race();
