import data from './data.js'; // importa o conteúdo de data.js

const gameList = document.getElementById('games-list');

function createCard(game) {
  // cria um card baseado nos dados tirados do parâmetro
  const card = document.createElement('div');

  card.className = `col-12 col-sm-12 col-md-3 col-lg-3 card-transparent ${game.tags}`;

  card.innerHTML = `<a href="./pages/game.html"><img src="${game.image}" class="card-img-top" alt="${game.title}"></a>`;

  gameList.appendChild(card); // adiciona o card a games-list
}

for (let i = 0; i < data.length; i++) {
  // cria os cards com base em cada item de data.js
  createCard(data[i]);
}
