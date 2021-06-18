let game_db = {};

const dadosIniciais = {
	game_list: []
}

function init() {
	const gameJSON = localStorage.getItem('game_db');

    if (!gameJSON) {   
        game_db = dadosIniciais;
        localStorage.setItem('game_db', JSON.stringify (dadosIniciais));
    }
    else  {
        game_db = JSON.parse(gameJSON);    
    }
}


const button = document.getElementById('btt');
button.addEventListener('click', searchGames)

const url = 'https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games';
const myHeaders = new Headers();
myHeaders.append('Client-ID', 'rnxg276wty5wu058cirpt702s7ry4c');
myHeaders.append('Authorization','Bearer vpg2qovzjnzizgjwhl289fr9tchzla');


function searchGames() {
	init();
	const query = document.getElementById('search').value

	const body = `fields name, cover, screenshots, videos, involved_companies; search "${query}"; where version_parent = null; limit 1;`

	const myInit = { method: 'POST', body: body , headers: myHeaders};

	fetch(url, myInit)
	.then(response => response.json())
	.then(data => {
			for (let i = 0; i < data.length; i++) {
					const game = {
							'name': data[i].name,
							'media': {
									'cover': data[i].cover,
									'screenshots': data[i].screenshots,
									'videos': data[i].videos,
							},
							'involved_companies': data[i].involved_companies
					}
					cadastrarGame(game);
			}
	})
}

function generateUUID() { // Public Domain/MIT
	var d = new Date().getTime();//Timestamp
	var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16;//random number between 0 and 16
			if(d > 0){//Use timestamp until depleted
					r = (d + r)%16 | 0;
					d = Math.floor(d/16);
			} else {//Use microseconds since page-load if supported
					r = (d2 + r)%16 | 0;
					d2 = Math.floor(d2/16);
			}
			return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
	});
}


function cadastrarGame(gameData) {
	const gameObject = {
			'Id': `${generateUUID()}`,
			'title': `${gameData.name}`,
			'tags': [],
			'dev': gameData.involved_companies,
			'media': {
					'cover': gameData.media.cover,
					'screenshots': gameData.media.screenshots,
					'videos': gameData.media.videos,
			}
	}
	game_db.game_list.push(gameObject);
	localStorage.setItem('game_db', JSON.stringify (game_db));
}