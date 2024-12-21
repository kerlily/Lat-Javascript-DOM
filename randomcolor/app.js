const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
	const newColor = generatorColor();
	document.body.style.backgroundColor = newColor
	console.log(newColor);
	h1.innerText = document.body;
});

const generatorColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	return `rgb(${r}, ${g}, ${b})`;
};