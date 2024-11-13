// Select Navbar
const navbar = document.querySelector('.navbar');

// Add Scroll event listener
window.addEventListener('scroll', () => {
    // Check scroll position if it is greater than 100px 
    if (window.scrollY > 100) {
        navbar.classList.add('transparent'); // Add transparent class
    } else {
        navbar.classList.remove('transparent'); // Remove transparent class
    }
});

// Select Sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

// Function for removal of Active class
function removeActiveClasses() {
    navLinks.forEach(link => link.classList.remove("active"));
}

// Add Scroll event listener
window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Check if section is near to the middle of viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            removeActiveClasses();
            // Active the link that is matching with section 
            const activeLink = document.querySelector(`a[href="#${section.id}"]`);
            activeLink.classList.add("active");
        }
    });
});

