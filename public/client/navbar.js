document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);
  
 
  
  // Insert after the menu toggle button
  if (menuToggle && menuToggle.parentNode) {
    menuToggle.parentNode.insertBefore(desktopToggle, menuToggle.nextSibling);
  }

  // Toggle mobile menu
  function toggleMenu() {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  }

  // Close menu when clicking on overlay
  overlay.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      toggleMenu();
    }
  });

  // Toggle menu on button click
  menuToggle.addEventListener('click', toggleMenu);

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
    
    // Check for exact match or if we're on a product details page
    const isProductDetails = currentPage === 'product-details.html' && linkHref === 'products.html';
    const isIndexPage = (currentPage === '' || currentPage === 'index.html') && linkHref === 'index.html';
    const isCurrentPage = linkHref === currentPage;
    const isHashMatch = linkHref === `#${window.location.hash}`;
    
    if (isCurrentPage || isProductDetails || isIndexPage || isHashMatch) {
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
