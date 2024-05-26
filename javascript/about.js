document.addEventListener('DOMContentLoaded', () => {
  function resizeText() {
    const text = document.querySelector('#about-me');
    const screenWidth = window.innerWidth;

    if (screenWidth < 500) {
      text.style.fontSize = '12px';
    }
    else if (screenWidth > 500) {
      text.style.fontSize = '15px';
    }
  };

  // function resizeImages() {
  //   const images = document.querySelectorAll('#img');
  //   const screenWidth = window.innerWidth;

  //   images.forEach(img => {
  //     if (screenWidth < 900 && screenWidth > 820) {
  //       img.style.width = '150px';
  //       img.style.height = '150px';
  //     }
  //     else if (screenWidth < 820 && screenWidth > 680) {
  //       img.style.width = '125px';
  //       img.style.height = '125px';
  //     }
  //     else if (screenWidth < 680 && screenWidth > 550) {
  //       img.style.width = '100px';
  //       img.style.height = '100px';
  //     }
  //     else if (screenWidth < 550 && screenWidth > 410) {
  //       img.style.width = '75px';
  //       img.style.height = '75px';
  //     }
  //     else if (screenWidth < 410) {
  //       img.style.width = '50px';
  //       img.style.height = '50px';
  //     }
  //   });
  // };

  // window.addEventListener('resize', resizeImages);
  window.addEventListener('resize', resizeText);

  // Call the function initially to set the size on page load
  resizeText();
  // resizeImages();
});