(() => {
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  function toggleMenu() {
    if (!mobileMenu) return;
    const isHidden = mobileMenu.classList.contains('translate-x-full');
    if (isHidden) {
      mobileMenu.classList.remove('translate-x-full');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.add('translate-x-full');
      document.body.style.overflow = 'auto';
    }
  }
  if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
  if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
  document.querySelectorAll('.menu-link').forEach((link) => link.addEventListener('click', toggleMenu));
})();
