document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation items and solution cards
    const navItems = document.querySelectorAll('.solutions-item');
    const solutionCards = document.querySelectorAll('.solution-card');
    const categorySelect = document.getElementById('sort');

    // Function to filter solutions
    function filterSolutions(category) {
        solutionCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Navigation click handler
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
            // Filter solutions
            const category = this.dataset.category;
            filterSolutions(category);
            // Update dropdown to match
            if (categorySelect) {
                categorySelect.value = category === 'all' ? 'all' : category;
            }
        });
    });

    // Dropdown change handler
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            const category = this.value;
            // Update active nav item
            navItems.forEach(nav => {
                if (nav.dataset.category === category || 
                   (category === 'all' && nav.dataset.category === 'all')) {
                    nav.classList.add('active');
                } else {
                    nav.classList.remove('active');
                }
            });
            // Filter solutions
            filterSolutions(category);
        });
    }

    // Apply filters button
    const applyFiltersBtn = document.querySelector('.apply-filters');
    const clearFiltersBtn = document.querySelector('.clear-filters');

    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            // Get selected categories
            const selectedCategories = [];
            document.querySelectorAll('input[name="category"]:checked').forEach(checkbox => {
                selectedCategories.push(checkbox.value);
            });

            // Get selected industries
            const selectedIndustries = [];
            document.querySelectorAll('input[name="industry"]:checked').forEach(checkbox => {
                selectedIndustries.push(checkbox.value);
            });

            // Filter solutions
            solutionCards.forEach(card => {
                const cardCategory = card.dataset.category;
                const cardIndustries = card.dataset.industries ? 
                    card.dataset.industries.split(' ') : [];
                
                const matchesCategory = selectedCategories.length === 0 || 
                                      selectedCategories.includes(cardCategory);
                
                const matchesIndustry = selectedIndustries.length === 0 || 
                                      cardIndustries.some(industry => 
                                          selectedIndustries.includes(industry));
                
                if (matchesCategory && matchesIndustry) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            // Reset all checkboxes
            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                checkbox.checked = true;
            });
            
            // Show all solutions
            solutionCards.forEach(card => {
                card.style.display = 'flex';
            });

            // Reset active nav item
            navItems.forEach(nav => {
                if (nav.dataset.category === 'all') {
                    nav.classList.add('active');
                } else {
                    nav.classList.remove('active');
                }
            });

            // Reset dropdown
            if (categorySelect) {
                categorySelect.value = 'all';
            }
        });
    }
});
