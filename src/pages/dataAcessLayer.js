export default function fetchData(url) {
	alert('oki');

	// let photographers;
	// const test = document.getElementById('test');
	// photographers = fetch(url).then((res) => console.log(res));
	//  res.json())
	// .then((value) => {
	// 	console.log(value);
	// 			let counter = 1;

	// 			let affichage = '';

	// 			for (let photographer of value.photographers) {
	// 				affichage += `
	// 				<div id="title">Nos photographes</div>
	// 				<div class="cards" id="card-${counter}">
	// 					<div class=card-header>
	// 						<a href="page.html?${photographer.id}"><img src=./img/SamplePhotos/Photographers_thubnails/${photographer.portrait}></a>
	// 						<h2 class="card-title">${photographer.name} </h2>
	// 					</div>
	// 					<div class="card -content">
	// 					<p>${photographer.city}, ${photographer.country} </p>
	// 					<p>${photographer.tagline} </p>
	// 					<p>${photographer.price} </p>
	// 					</div>
	// 					<div>${photographer.tags}</div>
	// 			</div>

	// 				`;
	// 				counter += 1;
	// 				document.querySelector(
	// 					'#main',
	// 				).innerHTML = `<div id="title">Nos photographes</div>`;
	// 			}

	// 			affichage += '';
	// 			document.querySelector('#main').innerHTML = affichage;
	// 		})
	// 		.catch((err) => console.log('this is the error ' + err));
	// };

	// export const checkButtonCounterClass = () => {
	// 	for (const key in localStorage) {
	// 		for (const element of photographers) {
	// 			if (key === element.id) {
	// 				let dataFromLocalStorage = JSON.parse(localStorage.getItem(key));
	// 				element.textContent = dataFromLocalStorage.number;

	// 				if (dataFromLocalStorage.category === 'false') {
	// 					element.classList.remove('addone');
	// 				} else if (dataFromLocalStorage.category === 'true') {
	// 					element.classList.add('addone');
	// 				}
	// 			}
	// 		}
	// 	}
}

export const addOrSubOne = (event) => {
	let value = event.target.closest('div div div').firstChild.nextSibling.textContent;
	let valueClasss = event.target.closest('div div div').firstChild.nextSibling;
	let counterNew;
	let objetLike = {};

	if (valueClasss.classList.contains('addone')) {
		counterNew = parseInt(value) + 1;
		valueClasss.classList.remove('addone');
		objetLike = {
			id: valueClasss.id,
			category: 'false',
			number: counterNew,
		};
		localStorage.setItem(valueClasss.id, JSON.stringify(objetLike));
	} else {
		counterNew = parseInt(value) - 1;
		valueClasss.classList.add('addone');
		objetLike = {
			id: valueClasss.id,
			category: 'true',
			number: counterNew,
		};
		localStorage.setItem(valueClasss.id, JSON.stringify(objetLike));
	}

	valueClasss.innerHTML = counterNew;
};
