document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);
  
  // Toggle mobile menu
  function toggleMenu() {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  }

  // Close menu when clicking on overlay
  overlay.addEventListener('click', toggleMenu);

  // Toggle menu on button click
  if (menuToggle) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });
  }

  // Close menu when clicking on a nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 992) {
        toggleMenu();
      }
    });
  });

  // Update active link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkHref = link.getAttribute('href');
    
    // Remove any existing active classes first
    link.classList.remove('active', 'nav-link-active');
    
    // Add active class to current page link
    if (linkHref === currentPage) {
      link.classList.add('active');
    }
  });
  // Handle window resize
  function handleResize() {
    if (window.innerWidth > 992) {
      navLinks.classList.remove('active');
      overlay.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }


  // Check for saved preference
 
  window.addEventListener('resize', handleResize);
});
