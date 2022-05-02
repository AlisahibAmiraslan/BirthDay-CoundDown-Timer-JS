const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

// my birthday is (19 december 2022)
const birthYear = '19 Dec 2022';

function countdown() {
	const birthYearDate = new Date(birthYear);
	const currenDate = new Date();
	// get time
	const totalSeconds = (birthYearDate - currenDate) / 1000;
	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const mins = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;


	daysEl.innerHTML = formatTime(days);
	hoursEl.innerHTML = formatTime(hours);
	minsEl.innerHTML = formatTime(mins);
	secondsEl.innerHTML = formatTime(seconds);


 }

// FOR TWO 0
function formatTime(time){
	return time < 10 ? `0${time}` : time;
}


countdown(); 

setInterval(countdown,1000)

