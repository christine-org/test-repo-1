/**
 * Main JavaScript file for test-repo-1
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded and ready!');
    
    // Add a simple greeting function
    function greet(name = 'World') {
        return `Hello, ${name}!`;
    }
    
    // Example of DOM manipulation
    const container = document.querySelector('.container');
    if (container) {
        // Create a new footer element
        const footer = document.createElement('div');
        footer.className = 'footer';
        footer.innerHTML = `
            <p>${greet('GitHub User')}</p>
            <p>Thanks for visiting this demo repository.</p>
            <p>Current time: ${new Date().toLocaleString()}</p>
        `;
        
        // Append the footer to the container
        container.appendChild(footer);
    }
    
    // Add event listeners to make the page interactive
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('click', function() {
            // Toggle a 'highlighted' class on click
            this.classList.toggle('highlighted');
            
            // Add the highlighted style if it doesn't exist in the stylesheet
            if (!document.querySelector('style#dynamic-styles')) {
                const style = document.createElement('style');
                style.id = 'dynamic-styles';
                style.textContent = `
                    .highlighted {
                        background-color: #f1f8ff !important;
                        border-left-color: #2188ff !important;
                        transition: all 0.3s ease;
                    }
                `;
                document.head.appendChild(style);
            }
        });
    });
});

