// Navigation active link highlighting and mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add active class to current page link
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const body = document.body;
    
    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle the active class on the nav-links container
            if (isExpanded) {
                navLinksContainer.classList.remove('active');
                body.style.overflow = ''; // Re-enable scrolling
            } else {
                navLinksContainer.classList.add('active');
                body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            }
            
            // Add/remove overlay
            let overlay = document.querySelector('.overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'overlay';
                document.body.appendChild(overlay);
                
                overlay.addEventListener('click', function() {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    navLinksContainer.classList.remove('active');
                    body.style.overflow = '';
                    overlay.remove();
                });
            } else {
                overlay.remove();
            }
        });
        
        // Close menu when clicking on a nav link
        const navItems = navLinksContainer.querySelectorAll('a');
        navItems.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.setAttribute('aria-expanded', 'false');
                navLinksContainer.classList.remove('active');
                body.style.overflow = '';
                const overlay = document.querySelector('.overlay');
                if (overlay) overlay.remove();
            });
        });
    }
    
    // Handle window resize
    function handleResize() {
        if (window.innerWidth > 992) {
            // Reset menu state on desktop
            if (navLinksContainer) {
                navLinksContainer.classList.remove('active');
                const overlay = document.querySelector('.overlay');
                if (overlay) overlay.remove();
                document.body.style.overflow = '';
            }
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    }
    
    window.addEventListener('resize', handleResize);
});
