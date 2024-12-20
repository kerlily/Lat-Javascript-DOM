// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseImgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for(let i = 1; i <= 500; i++) {
	const pokeball = document.createElement('div');
	pokeball.classList.add('pokemon');

	const imgpokemon = document.createElement('img');
	imgpokemon.src = `${baseImgURL}${i}.png`;
	pokeball.appendChild(imgpokemon);

	const label = document.createElement('span');
	label.innerText = `#${i}`;
	pokeball.appendChild(label);

	container.appendChild(pokeball);
}