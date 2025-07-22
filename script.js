// This file can be used for any interactive features or animations.
// Based on the provided images, there aren't complex interactions shown,
// but here are some common uses you might want to add:

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

    // You could add form validation if you implemented a contact form
    // const contactForm = document.querySelector('#contact-form');
    // if (contactForm) {
    //     contactForm.addEventListener('submit', (e) => {
    //         e.preventDefault();
    //         // Add validation logic here
    //         alert('Form submitted! (Not actually sent without backend)');
    //     });
    // }
});