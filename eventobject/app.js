document.querySelector('button').addEventListener('click', (e) => {
	console.log(e);
});

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
	switch(e.code){
		case 'Enter':
			console.log('Enter');
			break;
			case 'ArrowUp':
				console.log('atas');
				break;
	}
});

// input.addEventListener('keyup', () => {
// 	console.log('Tombol dirilis');
// });
