function toggleExpand(element) {
  const isExpanded = element.classList.toggle('expanded');
  
  if (isExpanded) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function toggleNavbar() {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('expanded');
}

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);

  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.scrollY;

    window.scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
  event.preventDefault();
}

$(function(){  // $(document).ready shorthand
  $('.monster').fadeIn('slow');
});

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( (bottom_of_window + 600)> bottom_of_object ){
                
                $(this).animate({'opacity':'1'},300);
                    
            }
            
        }); 
    
    });
    
});

    // Intersection Observer Configuration
var options = {
      root: null,
      rootMargin: '60%',
      threshold: 0.5 // Adjust the threshold as needed
};

  // Callback function to handle intersection changes
function handleIntersection(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting) {
              var imageUrl = entry.target.getAttribute('data-src');
              entry.target.style.backgroundImage = 'url(' + imageUrl + ')';
              observer.unobserve(entry.target); // Stop observing once loaded
          }
      });
}

  // Create Intersection Observer
var observer = new IntersectionObserver(handleIntersection, options);

  // Observe each element with the 'galleryimage' class
var galleryImages = document.querySelectorAll('.galleryimage');
galleryImages.forEach(function(image) {
      observer.observe(image);
});