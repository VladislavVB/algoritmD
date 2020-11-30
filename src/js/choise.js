// $(document).ready(function () {
//     let peopleLinkItem = $('.people-link');

//     peopleLinkItem.on('click', function(event) {
        // event.preventDefault();
//         let activeContent = $(this).attr('href');
//         $('.visible').toggleClass('visible')
//         $(activeContent).toggleClass('visible');

//         $('.choice-circle-active').toggleClass('choice-circle-active')
//         $(this).toggleClass('choice-circle-active');
//     });
// });

let onPeopleLinkClick = (index, event) => {
    
    event.stopPropagation();
    // document.querySelector('.visible').classList.item()
    // console.log(document.querySelector('.visible').classList);
    // document.querySelectorAll('.people-link')[index].classList.item(1)
    if (document.querySelectorAll('.people-link')[index].classList.item(1) === 'choice-circle-active') {
        return false;
    }

    document.querySelectorAll('.people-link').forEach(element => {
        element.classList.toggle('choice-circle-active', false);

    })
    document.querySelectorAll('.choice-first').forEach(element => {
        element.classList.toggle('visible', false);

    })

    document.querySelectorAll('.choice-first')[index].classList.add('visible');
    document.querySelectorAll('.people-link')[index].classList.add('choice-circle-active');
    return false;
}