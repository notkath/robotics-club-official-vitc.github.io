var swiper = new Swiper(".testi-slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0:{
      slidesPerView: 1,
    },
    520:{
      slidesPerView: 2,
    },
    950:{
      slidesPerView: 3,
    }
  }



});



let previewContainer = document.querySelector('.review-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.testi-card-wrapper .testi-card').forEach(product => {
  product.querySelector('.testi-button').onclick = (e) => {
    previewContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      } else {
        preview.classList.remove('active');
      }
    });
    e.stopPropagation(); // Prevents the event from bubbling up to the product card if necessary
  }
})


previewBox.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active')
    previewContainer.style.display = 'none';
  }
})