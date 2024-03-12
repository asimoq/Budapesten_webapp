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
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},300);
                    
            }
            
        }); 
    
    });
    
});