function checkTag(filter) {
  const checkbox = document.getElementById(filter)

  checkbox.onchange = function() {
    const cards = document.getElementById('games-list').getElementsByClassName('card-transparent');

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
  
      if (card.classList.contains(filter)) {

        card.classList.toggle('hidden', !this.checked)
      }
      
    }
  }
}