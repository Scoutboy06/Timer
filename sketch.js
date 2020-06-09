let ssBtn = document.querySelector('.bottom .startstop');
let clearBtn = document.querySelector('.bottom .clear');
let interval;
let time = 420;
let clockEl = document.querySelector('.clock span');
let alarm = document.querySelector('audio');

ssBtn.addEventListener('click', () => {
	if(ssBtn.classList.contains('start')) {
		ssBtn.classList.remove('start');
		ssBtn.classList.add('stop');
		ssBtn.textContent = 'Stop';

		interval = setInterval(() => {
			if(time == -1) {
				clearInterval(interval);
				alarm.play();
				return;
			}

			let min = Math.floor(time / 60).toString();
			if(min.length == 1) min = '0' + min;
			if(min == '0') min = '00';

			let sec = (time - min * 60).toString();
			if(sec.length == 1) sec = '0' + sec;
			if(sec == '0') sec = '00';

			clockEl.textContent = `${min}:${sec}`;

			time--;

			
		}, 1000);
	}

	else {
		ssBtn.classList.remove('stop');
		ssBtn.classList.add('start');
		ssBtn.textContent = 'Start';
		clearInterval(interval);
		alarm.pause();
	}
});

clearBtn.addEventListener('click', () => {
	if(interval) clearInterval(interval);
	alarm.pause();
	time = 420;


	let min = Math.floor(time / 60).toString();
	if(min.length == 1) min = '0' + min;
	if(min == '0') min = '00';

	let sec = (time - min * 60).toString();
	if(sec.length == 1) sec = '0' + sec;
	if(sec == '0') sec = '00';

	clockEl.textContent = `${min}:${sec}`;


	if(ssBtn.classList.contains('stop')) {
		ssBtn.classList.remove('stop');
		ssBtn.classList.add('start');
		ssBtn.textContent = 'Start';
	}
})