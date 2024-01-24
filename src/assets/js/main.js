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

var position = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
  $(window).scroll(function() {
    //men foq le ta7t
      if($("#desimg").isInViewport()){
        $("#desrow").addClass("fadeinout")
      }
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    if (scrollTop > position) {
      //downwards
      if (scrollTop>=1743) {
        
        document.body.style.background ='black';
        scrolleddown=1
        
        $(".anav").css("color","white")
        $(".whbox").css("background-color","white")
        } 
    } else {
      //upwards
      if(scrollTop<=2500){
        document.body.style.background ='#d9d9d9';
        $(".anav").css("color","black")
       scrolledtop=1;
      }
    }
    position = scrollTop;
   
 
 

     if($("#loader").isInViewport()) {
      $loader.classList.remove('loader--active')
    }

    });
  