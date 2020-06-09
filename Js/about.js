$(window).scroll(function(){
    if($(this).scrollTop()>500){
      $('.navbar-b.navbar-trans').css('background-color','rgba(0,0,0,0.5)')
    }else{
      $('.navbar-b.navbar-trans').css('background-color','transparent')
    }
  })