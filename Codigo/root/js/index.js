import data from './data.js';

function init() {
  var usuarioCorrente = {};

  const usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
  if (usuarioCorrenteJSON) {
    usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
  } else {
    window.location.href = 'login.html';
  }

  let game_db = {};

  const initialData = {
    game_list: data,
  };
  const gameJSON = localStorage.getItem('game_db');

  if (!gameJSON) {
    game_db = initialData;
    localStorage.setItem('game_db', JSON.stringify(initialData));
  } else {
    game_db = JSON.parse(gameJSON);
  }
}

init();
