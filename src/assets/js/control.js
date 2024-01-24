var inport=0
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  
  return elementBottom > viewportTop && elementTop < viewportBottom;
};
const isInViewport=function(element){
  var elementTop = element.offset().top;
      var elementBottom = elementTop + element.outerHeight();
    
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
    
      return elementBottom > viewportTop && elementTop < viewportBottom;
}
window.onload=function(){
  var position = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
  $(window).scroll(function() {
    //men foq le ta7t
    if($("#desimg").length){
      if($("#desimg").isInViewport()){
        $("#desrow").addClass("fadeinout")
      }
    }
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    if (scrollTop > position) {
      //downwards
      if (scrollTop>=3043) {
        
        document.body.style.background ='black';
        scrolleddown=1
        
        $(".anav").css("color","white")
        $(".whbox").css("background-color","white")
        } 
    } else {
      //upwards
      if(scrollTop<=3000){
        document.body.style.background ='#d9d9d9';
        $(".anav").css("color","black")
       scrolledtop=1;
      }
    }
    position = scrollTop;
   
 
 
      if($("#loader").length){
        if($("#loader").isInViewport()) {
          $loader.classList.remove('loader--active')
        }
    
      }
    });
  if($("#hero").length){
   
  }
  
  $(window).on('resize scroll', function() {
    console.log($("#hero").length)
    console.log($("#mywork").length)
    if($("#hero").length && $("#mywork").length){
      if ($('#hero').isInViewport()) {
        if($("#mywork").isInViewport()){
          console.log("in")
          $(".mywork").addClass("myworkmation")
          $(".hr").addClass("hrmation")
        }

      } 
      else if($(".mywork").isInViewport()){
        
        $(".mywork").addClass("myworkmation")
      }
      else {
          // do something else
      }
    }
  
  });
}


  $(document).ready(function(){
  
  })
