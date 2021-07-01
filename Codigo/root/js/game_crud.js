export function getUpdatedGames(db) {
  const games = db.game_list;

  for (let i = 0; i < games.length; i++) {
    const game = games[i];

    createCard(game);
  }
}

export async function createCard(game) {
  const cardList = document.getElementById('gameCards');
  const card = document.createElement('div');

  const coverUrl = await getCover(game)

  card.className = 'card';

  card.innerHTML = `<div class="card-body">
    <div class="card-title">
      <h5>${game.title}</h5>
      <button id="erase-game"class="btn btn-outline-danger"type="submit">Apagar</button>
    </div>
    <div class="row card-section">
    <div class="col-lg-2">
      <img src="${coverUrl}" alt="" srcset="">
    </div>

    <div class="col-lg-5 col-12 cadastro">
      <div class="d-flex card-inputs">
        <input type="text" class="form-control" placeholder="Adicionar tags de gênero">
        <button class="btn btn-outline-danger" type="submit">Add</button>
      </div>
      <div class="d-flex card-inputs">
        <input type="text" class="form-control" placeholder="Adicionar tags de gráfico">
        <button class="btn btn-outline-danger" type="submit">Add</button>
      </div>
      <div class="d-flex card-inputs">
        <input type="text" class="form-control" placeholder="Adicionar tags de classificação indicativa">
        <button class="btn btn-outline-danger" type="submit">Add</button>
      </div>
      <div class="d-flex card-inputs">
        <input type="text" class="form-control" placeholder="Adicionar id do devs">
        <button class="btn btn-outline-danger" type="submit">Add</button>
      </div>
    </div>

    <div class="col-lg-4 col-12 tags">
      <h6>Tags:</h6>
      <div id="tag-info">
      </div>
    </div>
  </div>
</div>`;

  cardList.appendChild(card);
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