document.addEventListener('DOMContentLoaded', function() {
    // Function to update all demo buttons
    function updateDemoButtons() {
        const demoButtons = document.querySelectorAll('button:contains("Request a Demo"), .btn:contains("Request a Demo")');
        demoButtons.forEach(button => {
            button.onclick = function(e) {
                e.preventDefault();
                window.location.href = 'contact.html?subject=demo';
            };
            // Convert buttons to links for better accessibility
            if (button.tagName === 'BUTTON') {
                const link = document.createElement('a');
                link.href = 'contact.html?subject=demo';
                link.className = button.className;
                link.innerHTML = button.innerHTML;
                button.parentNode.replaceChild(link, button);
            }
        });
    }

    // Check if we're on the contact page with demo parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('subject') === 'demo') {
        const subjectSelect = document.getElementById('subject');
        if (subjectSelect) {
            subjectSelect.value = 'demo';
            // Optional: Scroll to the form
            subjectSelect.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Initialize demo buttons
    updateDemoButtons();
});
