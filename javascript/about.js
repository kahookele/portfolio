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

  function showPics() {
    const pics = document.querySelectorAll('.img');

    pics.forEach(pic => {
      pic.addEventListener('click', (event) => {
        // Prevent click event from propagating to document
        event.stopPropagation();

        // Toggle the 'expanded' class
        pic.classList.toggle('expanded');
      });
    });

    // Add an event listener to the document to reset styles when clicking anywhere else
    document.addEventListener('click', () => {
      pics.forEach(pic => {
        pic.classList.remove('expanded');
      });
    });
  }

  window.addEventListener('resize', resizeText);

  // Call the function initially to set the size on page load
  resizeText();
  showPics();
});