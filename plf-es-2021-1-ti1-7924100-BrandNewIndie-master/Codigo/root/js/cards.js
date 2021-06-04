import data from './data.js'; // importa o conteúdo de data.js

var req = new XMLHttpRequest();
    var url = 'https://api.igdb.com/v4/games';

    function dataProcessing(){
      var gameData = JSON.parse (req.responseText);
      var exit = '';
      for (i=0;i<25;i++){
        exit += `<div class="box-game">
          <img src="${gameData.results[i].covers.medium}" alt="">
          <p>${gameData.results[i].name.medium}</p>`
      }
      document.getElementById('games-list').innerHTML = exit;
    }

    function getData(){
      req.onload = dataProcessing;
      req.open('POST', url, true);
      req.setRequestHeader('Client-Id', 'nxocqh3uq8yqw1naozsmbpjyaz1ndw');
      req.setRequestHeader('Authorization', 'Bearer oiwcf0icfkze57x4h2p0dh5y3stz0g');
      req.send('name','covers');
      console.log(status);
    }

const gameList = document.getElementById('games-list');

function createCard(game) {
  // cria um card baseado nos dados tirados do parâmetro
  const card = document.createElement('div');

  card.className = `col-12 col-sm-12 col-md-3 col-lg-3 card-transparent`;

  for (let i = 0; i < game.tags.length; i++) {
    const tag = game.tags[i];
    card.classList.add(tag)
  }

  card.innerHTML = `<a href="${game.location}"><img src="${game.image}" class="card-img-top" alt="${game.title}"></a>`;

  gameList.appendChild(card); // adiciona o card a games-list
}


for (let i = 0; i < data.length; i++) {
  // cria os cards com base em cada item de data.js
  createCard(data[i]);
}
