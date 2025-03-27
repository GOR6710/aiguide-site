document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation tabs
    const navTabs = document.querySelectorAll('.main-nav li');
    
    // Get all tool sections
    const toolSections = document.querySelectorAll('.tools-section');
    
    // Add click event listener to each tab
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            navTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get category from data attribute
            const category = this.getAttribute('data-category');
            
            // Hide all tool sections
            toolSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the corresponding tool section
            document.querySelector(`.tools-section.${category}`).classList.add('active');
        });
    });
    
    // Make tool cards clickable
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // If the card is already a link (has href), the browser will handle it
            // This is for the cards in the featured section that don't have links
            if (!this.hasAttribute('href') && e.target.tagName !== 'A') {
                // Find the closest parent with a link if there is one
                const link = this.querySelector('a');
                if (link) {
                    window.open(link.getAttribute('href'), '_blank');
                }
            }
        });
    });
}); 