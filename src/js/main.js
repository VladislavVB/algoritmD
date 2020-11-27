let swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      340: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
  });

  const buttomMobileMenu = document.querySelector('.btn_mobile');
  const navigationMenu = document.querySelector('.nav-items');
  buttomMobileMenu.addEventListener('click', () => {
    navigationMenu.classList.toggle('activebur');
  })

// let activeScript = () => {
//   document.getElementById('firstIcon').classList.add('active');
// }