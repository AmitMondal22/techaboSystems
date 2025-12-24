document.addEventListener('DOMContentLoaded', function() {
  // Counter animation function
  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    const counterElement = element;
    
    const updateCounter = () => {
      current += increment;
      
      // Format number with commas
      if (current >= target) {
        counterElement.textContent = target.toLocaleString();
        return;
      }
      
      counterElement.textContent = Math.floor(current).toLocaleString();
      requestAnimationFrame(updateCounter);
    };
    
    updateCounter();
  }

  // Intersection Observer for scroll-triggered animations
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counterElements = entry.target.querySelectorAll('.counter');
        let delay = 0;
        
        counterElements.forEach((counter, index) => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const isMillion = counter.textContent.includes('M');
          const finalTarget = isMillion ? target * 1000000 : target;
          
          // Add animation class with staggered delay
          setTimeout(() => {
            counter.parentElement.classList.add('animated');
            
            // Start counter animation after a short delay
            setTimeout(() => {
              animateCounter(counter, finalTarget);
              counter.parentElement.classList.add('visible');
            }, 300);
            
          }, delay);
          
          delay += 200; // 200ms delay between each counter
        });
        
        // Unobserve after animation starts to prevent retriggering
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe the stats section
  const statsSection = document.querySelector('.industry-leaders .stats');
  if (statsSection) {
    observer.observe(statsSection);
  }
});
