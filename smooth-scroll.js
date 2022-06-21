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

function smoothScrollY(position, time) {
	let currentPosition = window.pageYOffset;
	let start = null;

	if (time === null) {
		time = 500;
	}

	position = +position;
	time = +time;

	window.requestAnimationFrame(function step(currentTime) {
		start = !start ? currentTime : start;

		let progress = currentTime - start;

		if (currentPosition < position) {
			window.scrollTo(0, ((position - currentPosition) * progress / time) + currentPosition);
		} else {
			window.scrollTo(0, currentPosition - ((position - currentPosition) * progress / time));
		}

		if (progress < time) {
			window.requestAnimationFrame(step);
		} else {
			window.scrollTo(0, position);
		}
	});
}

export {
	smoothVerticalScrolling,
	smoothHorizontalScrolling,
	smoothScrollY,
}
