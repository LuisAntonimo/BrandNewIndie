const myHeaders = new Headers();
  myHeaders.append('Client-ID', 'rnxg276wty5wu058cirpt702s7ry4c');
  myHeaders.append('Authorization','Bearer vpg2qovzjnzizgjwhl289fr9tchzla');
  myHeaders.append('Access-Control-Allow-Origin', '*');
let game_db = {};

function init(){

  const gameJSON = localStorage.getItem('game_db');
  game_db = JSON.parse(gameJSON);

}

init();

const gameList = game_db.game_list
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

function isGame(game) {
  return game.id == myParam
}

const game = gameList.find(isGame);

// ----------------------------------------

const game_name = document.getElementById('game-name');

game_name.innerHTML = `${game.title}`

async function getCover(game) {

  const url = 'https://cors.bridged.cc/https://api.igdb.com/v4/covers';
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

async function setCover() {
  const url = await getCover(game)
  const game_cover = document.getElementById('game-cover');

  game_cover.src = url  
}

setCover();

// ----------------------------------------


async function getScreenshot(id) {

  const url = 'https://cors.bridged.cc/https://api.igdb.com/v4/screenshots';
  const body = `fields image_id; where id = ${id};`

  const myInit = { method: 'POST', body: body , headers: myHeaders};

	const imageId = fetch(url, myInit)
	.then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      return data[i].image_id
    }
  })
  
  const imageUrl = `https://images.igdb.com/igdb/image/upload/t_original/${await imageId}.jpg`;

  return imageUrl;
}

const carousel_items = document.querySelectorAll('.carousel-item')

function geRandomPictures() {
  const nums = [],
    ranNums = [];
  for (let i = 0; i < game.media.screenshots.length; i++) {
    nums.push(i);
  }

  let index = 3;

  while (index > 0) {
    let j = Math.floor(Math.random() * nums.length);

    if (!ranNums.includes(j)) {
      ranNums.push(nums[j]);
      index--;
    }
  }

  return ranNums;
}

const pictureData = geRandomPictures();

async function setPictures() {
  for (let i = 0; i < pictureData.length; i++) {
    const id = game.media.screenshots[pictureData[i]]

    const url = await getScreenshot(id)

    const item = carousel_items[i];
    const img = item.querySelector('img');
  
    img.src = url
  }
}

setPictures();

// ----------------------------------------

function createTag(gameTag) {
  const tags = document.querySelector('.tags');

  const tag = document.createElement('button')

  tag.classList = 'btn btn-danger disabled tag-bttn'
  tag.innerHTML = gameTag

  tags.appendChild(tag)
}


function setTags(game) {
  const gameTags = game.tags
  

  for (let i = 0; i < gameTags.genre.length; i++) {
    const genreTag = gameTags.genre[i];

    createTag(genreTag)
  }
  for (let i = 0; i < gameTags.graphics.length; i++) {
    const graphicsTag = gameTags.graphics[i];

    createTag(graphicsTag)
  }
  for (let i = 0; i < gameTags.age_rate.length; i++) {
    const rateTag = gameTags.age_rate[i];

    createTag(rateTag)
  }
}

setTags(game);

// ----------------------------------------

const steam = document.getElementById('steam')

steam.href = `https://store.steampowered.com/app/${game.stores.steam}`

const epicG = document.getElementById('epic')
const epicId = game.stores.epic

if (epicId != 0) {
  epicG.href = `https://www.epicgames.com/store/pt-BR/p/${epicId}`
} else {
  epicG.classList.add('hidden')
}