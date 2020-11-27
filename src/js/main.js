let hiddenCard,
    isOpen = false;
window.onload = () => {
    hiddenCard = document.querySelectorAll('.hidden-card');
}
const showAllCards = () => {
    if (isOpen) {
        document.querySelector('.portfolio-button').innerHTML='Explore All'
        hiddenCard.forEach(element => {
            element.classList.add('hidden-card');
        });
        isOpen = false;
    } else {
        document.querySelector('.portfolio-button').innerHTML='Close'
        hiddenCard.forEach(element => {
            element.classList.remove('hidden-card');
        });
        isOpen = true;
    }

}












