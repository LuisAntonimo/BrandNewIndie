import tagsData from './tag_data.js'

const genreTags = tagsData.genre;

const tags = document.querySelector('.tags')

function createTags(data) { // cria uma tag baseado nos dados tirados do parâmetro
    const tag = document.createElement('div')
    tag.className = 'col-3 form-check'
tag.innerHTML = `<input class="form-check-input" type="checkbox" value="" id="${data}" onclick="checkTag('${data}')" checked>
    <label class="form-check-label" for="${data}">${data}</label>`
    tags.appendChild(tag)    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 8; i++) {
    createTags(genreTags[getRandomInt(0, genreTags.length)])
}