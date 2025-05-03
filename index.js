  
  document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
            
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
        targetElement.scrollIntoView({
        behavior: 'smooth'
           });
         }
      });
    });
    
   
    
  // Contact Me button functionality
    const contactBtn = document.querySelector('.btn1 a');
     if (contactBtn) {
       contactBtn.addEventListener('click', function(e) {
       e.preventDefault();
         document.querySelector('#contact').scrollIntoView({
          behavior: 'smooth'
          });
      });
    }
    
       
  // Highlight active navigation item based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
      window.addEventListener('scroll', function() {
      let current = '';
        sections.forEach(section => {
         const sectionTop = section.offsetTop;
         const sectionHeight = section.clientHeight;
            
          if (pageYOffset >= (sectionTop - 300)) {
            current = section.getAttribute('id');
          }
      });
    navItems.forEach(item => {
      item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
          item.classList.add('active');
            }
         });
      });
   });
  
   
    
    