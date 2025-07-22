document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // You could add functionality for the "View More" button in the portfolio
    const viewMoreBtn = document.querySelector('.btn-more');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', () => {
            alert('Loading more portfolio items... (This would typically load more content dynamically)');
            // In a real application, you'd load more items via AJAX or show hidden ones.
        });
    }

    // --- Image Enlarger Functionality for Portfolio Items ---
    const portfolioImages = document.querySelectorAll('.portfolio-item img');
    const imageEnlargerOverlay = document.getElementById('imageEnlargerOverlay');
    const enlargedPortfolioImage = document.getElementById('enlargedPortfolioImage');
    const closeButton = document.querySelector('.image-enlarger-overlay .close-button');

    // Add click event listener to each portfolio image
    portfolioImages.forEach(image => {
        image.addEventListener('click', function() {
            imageEnlargerOverlay.style.display = 'flex'; // Show the overlay
            enlargedPortfolioImage.src = this.src; // Set the source of the enlarged image to the clicked image's source
            document.body.style.overflow = 'hidden'; // Prevent scrolling on the body when overlay is active
        });
    });

    // Close the enlarged image when the close button is clicked
    closeButton.addEventListener('click', function() {
        imageEnlargerOverlay.style.display = 'none'; // Hide the overlay
        document.body.style.overflow = ''; // Restore body scrolling
    });

    // Close the enlarged image when clicking anywhere on the overlay (outside the image)
    imageEnlargerOverlay.addEventListener('click', function(event) {
        if (event.target === imageEnlargerOverlay) {
            imageEnlargerOverlay.style.display = 'none'; // Hide the overlay
            document.body.style.overflow = ''; // Restore body scrolling
        }
    });

    // Close the enlarged image when the Escape key is pressed
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && imageEnlargerOverlay.style.display === 'flex') {
            imageEnlargerOverlay.style.display = 'none'; // Hide the overlay
            document.body.style.overflow = ''; // Restore body scrolling
        }
    });
    // --- End Image Enlarger Functionality ---

    // Example of a simple hover effect for portfolio items (CSS handles most of this)
    // If you wanted more complex JS-driven animation, you'd put it here.
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Optional: Add a class for JS-driven animations
            // item.classList.add('hovered');
        });
        item.addEventListener('mouseleave', () => {
            // Optional: Remove the class
            // item.classList.remove('hovered');
        });
    });

  
});
