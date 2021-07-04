function aleatorio() {
    links = new Array('./gamecard1.html',
    './gamecard2.html',
    './gamecard3.html',
    './gamecard4.html',
    './gamecard5.html',
    './gamecard6.html',
    './gamecard7.html',
    './gamecard8.html',
    './gamecard9.html');

tamanho = links.length;

nRand = Math.floor((Math.random() * tamanho));

var JogoAleatorio = document.getElementById('JogoAleatorio');
JogoAleatorio.href = `${links[nRand]}`;
}