let modal,
    isModal = false;
window.onload = () => {
    hiddenModal = document.querySelectorAll('.modal-visible');
}
const showAllCards = () => {
    if (isModal) {
        // document.querySelector('.portfolio-button').innerHTML = 'Explore All'
        hiddenModal.forEach(element => {
            element.classList.add('modal-visible');
        });
        isModal = false;
    } else {
        // document.querySelector('.portfolio-button').innerHTML = 'Close'
        hiddenModal.forEach(element => {
            element.classList.remove('modal-visible');
        });
        isModal = true;
    }
}

// document.getElementById('intro_btn').onclick = function() {
//     document.getElementById('main').classList.add('modal-visible');
//   }
// $(document).ready(function () {
//     var modalForm = $('.modal__form');
//     var controlForm = $('.control__form');
//     var footerForm = $('.footer__form');
    
//     onSubmitForm(modalForm)
//     onSubmitForm(controlForm)
//     onSubmitForm(footerForm)

//     $('[data-toggle=modal]').on('click', function () {
//         modal.toggleClass('modal--visible');
//     });

//     $('.modal__close').on('click', function () {
//         modal.toggleClass('modal--visible');
//     });

//     $('.modal-up__close').on('click', function () {
//         modalUp.removeClass('modal-up--visible');
//     });
// });