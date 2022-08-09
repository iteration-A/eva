// chrome fixes
// i don't know why but for some reason chrome adds extra space
// (doesn't happen in safari)
const fixChrome = () => {
	const elements = document.querySelectorAll("text tspan");

	for(const element of elements) {
		const text = element.textContent;
		element.textContent = text.trim();
	}
}
fixChrome();
