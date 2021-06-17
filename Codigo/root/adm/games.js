import data from '../js/data.js';

const button = document.getElementById('btt');
button.addEventListener('click', teste)

const url = `https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games`;
const myHeaders = new Headers();
myHeaders.append('Client-ID', 'rnxg276wty5wu058cirpt702s7ry4c');
myHeaders.append('Authorization','Bearer vpg2qovzjnzizgjwhl289fr9tchzla');
let body;


function teste() {
	const query = document.getElementById('search').value
	body = `fields name cover screenshots videos involved_companies; search "${query}"; where version_parent = null;`
	const myInit = { method: 'POST', body: body , headers: myHeaders};
	fetch(url, myInit)
	.then(response => response.json())
	.then(data => {
		for (let i = 0; i < data.length; i++) {
			const game = {
				'name': data[i].name,
				'media': {
					"cover": data[i].cover,
					"screenshots": data[i].screenshots,
					"videos": data[i].videos,
				},
				'involved_companies': data[i].involved_companies
			}
		}
	})
}