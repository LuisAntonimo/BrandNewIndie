function init() {
  let game_db = {};
  const gameJSON = localStorage.getItem('game_db');

  game_db = JSON.parse(gameJSON);

  const gameList = game_db.game_list;
  let links = gameList.map((response) => response.id);

  const tamanho = links.length;

  const nRand = Math.floor(Math.random() * tamanho);

  const link = document.getElementById('rand');
  link.href = `./game.html?id=${links[nRand]}`;
}

init();