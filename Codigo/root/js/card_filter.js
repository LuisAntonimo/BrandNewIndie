function checkTag(filter) {
  const checkbox = document.getElementById(filter) // Pega a checkbox com base no Id

  checkbox.onchange = function() { // Detecta quando o estado dela muda e chama uma função
    const cards = document.getElementById('games-list').getElementsByClassName('card-transparent'); // Pega todos os cards em games-list

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
  
      if (card.classList.contains(filter)) { // Se algum card dentro todos os outros contiver a tag listada no parâmetro ↓

        card.classList.toggle('hidden', !this.checked) // a classe hidden será posta ou tirada dele com baseando se a checkbox está ou não marcada
      }
      
    }
  }
}