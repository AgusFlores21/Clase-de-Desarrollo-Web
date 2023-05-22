document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  function topFunction() {
    const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
      window.requestAnimationFrame(topFunction);
      window.scrollTo(0, currentPosition - currentPosition / 8);
    }
  }

  const images = document.querySelectorAll('.gallery-img');
  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal-img');

  images.forEach(image => {
    image.addEventListener('click', () => {
      modalImg.src = image.src;
      modal.style.display = 'block';
    });

    image.addEventListener('touchstart', () => {
      modalImg.src = image.src;
      modal.style.display = 'block';
    });
  });

  modal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
