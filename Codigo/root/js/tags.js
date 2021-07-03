import tagsData from './tag_data.js';

const genreTags = tagsData.genre;

const tags = document.querySelector('.tags');

function createTags(data) {
  // cria uma tag baseado nos dados tirados do parâmetro
  const tag = document.createElement('div');
  tag.className = 'col-3 form-check';
  tag.innerHTML = `<input class="form-check-input" type="checkbox" value="" id="${data}" onclick="checkTag('${data}')" checked>
    <label class="form-check-label" for="${data}">${data}</label>`;
  tags.appendChild(tag);
}

const numData = getRandomTags();

function getRandomTags() {
  const nums = [],
    ranNums = [];
  for (let i = 0; i < genreTags.length; i++) {
    nums.push(i);
  }

  let index = 8;

  while (index > 0) {
    let j = Math.floor(Math.random() * nums.length);

    if (!ranNums.includes(j)) {
      ranNums.push(nums[j]);
      index--;
    }
  }

  return ranNums;
}

for (let i = 0; i < numData.length; i++) {
  createTags(genreTags[numData[i]]);
}
