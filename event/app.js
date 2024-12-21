const button = document.querySelector('#clickme');

button.onclick = function () {
	console.log('bdhkajjbdio');
};

const scream = () => {
	console.log('bdhkajjbdio');
}

button.onmouseover = scream


const eventbtn = document.querySelector('#eventbtn');
eventbtn.addEventListener('dblclick', step2);
eventbtn.addEventListener('click', step1);

function step1() {
	console.log('step 1');
}

function step2() {	
	console.log('step 2');
}