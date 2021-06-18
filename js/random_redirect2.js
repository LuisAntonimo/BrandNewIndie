function aleatorio() {
    links = new Array('../pages/gamecard1.html',
    '../pages/gamecard2.html',
    '../pages/gamecard3.html',
    '../pages/gamecard4.html',
    '../pages/gamecard5.html',
    '../pages/gamecard6.html',
    '../pages/gamecard7.html',
    '../pages/gamecard8.html',
    '../pages/gamecard9.html');

tamanho = links.length;

nRand = Math.floor((Math.random() * tamanho));

var JogoAleatorio = document.getElementById('JogoAleatorio');
JogoAleatorio.href = `${links[nRand]}`;
}