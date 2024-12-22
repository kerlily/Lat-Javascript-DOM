const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');

// input.addEventListener('change', function(e) {
// 	console.log('nilai berubah bjir');
// });

input.addEventListener('input', function(e) {
	console.log('nilai berubah bjir');
});

form.addEventListener('submit', function(e) {
	
	e.preventDefault();
	const noteValue = input.value;
	const newList = document.createElement('li');
	newList.innerText = noteValue;
	list.append(newList);
	input.value = '';
	
});

document.querySelector('a').addEventListener('click', function(e) {
	e.preventDefault();
	console.log('click');
})


const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function(e) {
	container.style.backgroundColor = generatorColor();
	e.stopPropagation();
});


container.addEventListener('click', function() {
	container.classList.toggle('hide');
});

const generatorColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	return `rgb(${r}, ${g}, ${b})`;
};

list.addEventListener('click', function(e) {	
	e.target.nodeName === 'LI' && e.target.remove();
});


// const lis = document.querySelectorAll('li');
// for (let li of lis) {
// 	li.addEventListener('click', function() {
// 		li.remove();
// 	});
// }