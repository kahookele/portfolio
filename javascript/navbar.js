document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
      links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
      links.style.display = 'flex';
    } else {
      links.style.display = 'none';
    }
  });
});