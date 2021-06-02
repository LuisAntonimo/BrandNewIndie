import tagsData from './tag_data.js'

const tags = document.querySelector('.tags')

function createTags(data) { // cria uma tag baseado nos dados tirados do parâmetro
    const tag = document.createElement('div')
    tag.className = 'form-check'
    tag.innerHTML = `<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
    <label class="form-check-label" for="flexCheckChecked">${data}</label>`
    tags.appendChild(tag)    
}

for (let i = 0; i < tagsData.length; i++) {
    createTags(tagsData[i])
}