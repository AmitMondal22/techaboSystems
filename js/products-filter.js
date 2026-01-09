document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const mobileFilterBtn = document.getElementById('mobileFilterBtn');
    const sidebarFilters = document.getElementById('sidebarFilters');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const closeSidebar = document.getElementById('closeSidebar');
    const clearFiltersBtn = document.querySelector('.clear-filters');
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox input[type="checkbox"]');

    // Toggle sidebar on mobile
    function toggleSidebar() {
        sidebarFilters.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
        document.body.style.overflow = sidebarFilters.classList.contains('active') ? 'hidden' : '';
    }

    // Close sidebar
    function closeSidebarHandler() {
        sidebarFilters.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Clear all filters
    function clearFilters() {
        filterCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        // You can add any additional filter clearing logic here
    }

    // Event listeners
    if (mobileFilterBtn) {
        mobileFilterBtn.addEventListener('click', toggleSidebar);
    }

    if (closeSidebar) {
        closeSidebar.addEventListener('click', closeSidebarHandler);
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebarHandler);
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearFilters);
    }

    // Close sidebar when clicking on a filter checkbox on mobile
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (window.innerWidth < 992) {
                // Small delay to show the checkbox being checked before closing
                setTimeout(closeSidebarHandler, 300);
            }
        });
    });

    // Handle window resize
    function handleResize() {
        if (window.innerWidth >= 992) {
            // Reset sidebar state on desktop
            sidebarFilters.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Add resize event listener
    window.addEventListener('resize', handleResize);
});
