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

  window.addEventListener('resize', resizeText);

  // Call the function initially to set the size on page load
  resizeText();
});