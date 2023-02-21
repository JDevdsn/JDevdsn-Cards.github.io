var heart = document.querySelector(".heart i");

heart.addEventListener("click", function() {
  heart.classList.toggle("fa-heart");
  heart.classList.toggle("fa-heart-o");
});

// Select the heart icon of the second card
var heart2 = document.querySelector(".heart2 i");

// Add event listener to the heart icon of the second card
heart2.addEventListener("click", function() {
  heart2.classList.toggle("fa-heart");
  heart2.classList.toggle("fa-heart-o");
});

// Get the modal
var modal = document.querySelector(".modal");

// Get the button that opens the modal
var trigger = document.querySelector(".modal-trigger");

// Get the <span> element that closes the modal
var closeButton = document.querySelector(".close-button");

// When the user clicks the button, open the modal
trigger.addEventListener("click", function() {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});



//! === SWIPER  ===
const swiper = new Swiper('.myswiper', {
  effect: 'coverflow', 
  grabCursor: true, 
  centeredSlides: true, 
  slidesPerView: 'auto', 
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active'
  }
});

