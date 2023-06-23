// Scroll to section smoothly when clicking on the navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
  
        const target = document.querySelector(event.target.hash);
        target.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  
  // Add animations on scroll
  window.addEventListener('scroll', () => {
    const homeSection = document.getElementById('home');
    const productsSection = document.getElementById('products');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');
  
    const sections = [homeSection, productsSection, aboutSection, contactSection];
  
    sections.forEach(section => {
      if (isElementInViewport(section)) {
        section.classList.add('animate');
      }
    });
  });
  
  // Check if an element is in the viewport
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  