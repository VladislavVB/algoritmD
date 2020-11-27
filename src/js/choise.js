let currentCard 
window.onload = () => {
    currentCard = document.querySelector('.visible');
    console.log(currentCard);
}
const switchCard = (cardId) => {
    document.getElementById(cardId).classList.add('visible')
    console.log(currentCard);
    currentCard.classList.remove('visible')
}
//пытался реализовать...... но мозгг ууже не роботает
