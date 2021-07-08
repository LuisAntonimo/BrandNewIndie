function init() {
  let game_db = {};

  const gameJSON = localStorage.getItem('game_db');

  game_db = JSON.parse(gameJSON);

  window.onload = getGames(game_db.game_list);
}

const gameList = document.getElementById('games-list');

async function createCard(game) {
  // cria um card baseado nos dados tirados do parâmetro
  const card = document.createElement('div');
  const coverUrl = await getCover(game)

  card.className = `col-12 col-sm-12 col-md-3 col-lg-3 card-transparent`;

  for (let i = 0; i < game.tags.genre.length; i++) {
    const tag = game.tags.genre[i];
    card.classList.add(tag);
  }

  card.innerHTML = `<a href="./index.html"><img src="${coverUrl}" class="card-img-top" alt="${game.title}"></a>`;

  gameList.appendChild(card); // adiciona o card a games-list
}

function getGames(games) {
  const tags = document.getElementsByClassName('tag');

  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    let ids = [];

    
      for (const tag of tags) {
        if (game.tags.genre.includes(tag.id) && !ids.includes(game.id)) {
          createCard(game);
          ids.push(game.id)
        }
      }
  }
}

const url = 'https://cors.bridged.cc/https://api.igdb.com/v4/covers';

const myHeaders = new Headers();
  myHeaders.append('Client-ID', 'rnxg276wty5wu058cirpt702s7ry4c');
  myHeaders.append('Authorization','Bearer vpg2qovzjnzizgjwhl289fr9tchzla');
  myHeaders.append('Access-Control-Allow-Origin', '*');

async function getCover(game) {

  const body = `fields image_id; where id = ${game.media.cover};`

  const myInit = { method: 'POST', body: body , headers: myHeaders};

	const imageId = fetch(url, myInit)
	.then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      return data[i].image_id
    }
  })
  
  const imageUrl = `https://images.igdb.com/igdb/image/upload/t_cover_big/${await imageId}.jpg`;

  return imageUrl;
}

init();
