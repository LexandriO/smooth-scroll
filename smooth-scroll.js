function smoothVerticalScrolling(event, time, where) {
	let topPosition = event.getBoundingClientRect().top;
	let eAmt = topPosition / 100;
	let currentTime = 0;

	while (currentTime <= time) {
		window.setTimeout(smoothVerticalScrollingBehavior, currentTime, eAmt, where);
		currentTime += time / 100;
	}
}

function smoothVerticalScrollingBehavior(eAmt, where) {
	if (where == "center" || where == "")
		window.scrollBy(0, eAmt / 2);
	if (where == "top")
		window.scrollBy(0, eAmt);
}

function smoothHorizontalScrolling(event, time, amount, start) {
	let eAmt = amount / 100;
	let currentTime = 0;
	let scrollCounter = 0;

	while (currentTime <= time) {
		window.setTimeout(smoothHorizontalScrollingBehavior, currentTime, event, scrollCounter, eAmt, start);
		currentTime += time / 100;
		scrollCounter++;
	}
}

function smoothHorizontalScrollingBehavior(event, sc, eAmt, start) {
	event.scrollLeft = (eAmt * sc) + start;
}

export {
	smoothVerticalScrolling,
	smoothHorizontalScrolling,
}