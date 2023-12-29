$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};
var $loader = document.querySelector('.loader')

window.onload = function() {
 
};


document.querySelector('.btn').addEventListener('click', function () {
  $loader.classList.add('loader--active')
  
  window.setTimeout(function () {
    $loader.classList.remove('loader--active')
  }, 5000)
})


  $(window).scroll(function() {
    if ($('#desimg').isInViewport()) {
    $("#desrow").addClass("fadeinout")
   
    } 
     if($("#loader").isInViewport()) {
      $loader.classList.remove('loader--active')
    }
    });
  