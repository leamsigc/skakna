// Interception  Observer
let options = {
	rootMargin: '0px',
	threshold: 1.0
};
const addAnimation = target => {
	const interceptionObserver = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const box = entry.target;
			if (entry.intersectionRatio > 0.3) {
				box.classList.add('active');
				observer.disconnect();
			} else {
				box.classList.remove('active');
			}
		});
	}, options);

	// start Observer
	interceptionObserver.observe(target);
};

const cards = [...document.querySelectorAll('.card')];
//add animation to each card
cards.forEach(card => {
	addAnimation(card);
});
