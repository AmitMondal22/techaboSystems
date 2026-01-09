// ---------- Mobile Menu Toggle ----------
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when a link is clicked (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ---------- Smooth Scrolling ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // offset for fixed navbar
        behavior: "smooth"
      });
    }
  });
});

// ---------- Scroll Animations ----------
const elements = document.querySelectorAll(".card, .solution-gallery img, .stats div");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));

// ---------- Product Details Tabs Navigation ----------
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  const tabContainer = document.querySelector('.tabs-container');
  
  if (!tabs.length || !tabContainer) return;

  // Function to update active tab
  function updateActiveTab() {
    const scrollPosition = window.scrollY + 150; // Adding offset for better UX
    
    // Get all sections that correspond to tabs
    const sections = Array.from(tabs).map(tab => {
      const targetId = tab.getAttribute('data-tab');
      const section = document.querySelector(`section[data-section="${targetId}"]`);
      return { tab, section };
    }).filter(item => item.section);

    // Find the current active section
    let currentSection = null;
    for (const { section } of sections) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + sectionHeight - 100) {
        currentSection = section;
        break;
      }
    }

    // Update active tab
    if (currentSection) {
      const activeTabId = currentSection.getAttribute('data-section');
      tabs.forEach(tab => {
        if (tab.getAttribute('data-tab') === activeTabId) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
    }
  }

  // Add click event to tabs
  tabContainer.addEventListener('click', function(e) {
    const tab = e.target.closest('.tab');
    if (!tab) return;
    
    e.preventDefault();
    const targetId = tab.getAttribute('data-tab');
    const targetSection = document.querySelector(`section[data-section="${targetId}"]`);
    
    if (targetSection) {
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Smooth scroll to section
      window.scrollTo({
        top: targetSection.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }
  });
  
  // Update active tab on scroll
  window.addEventListener('scroll', updateActiveTab);
  
  // Initial update
  updateActiveTab();
});
