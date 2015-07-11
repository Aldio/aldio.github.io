$( document ).ready(function() {
  $(".ports").hide().fadeIn();
  for(var i = 1; i <= 6; i++ ){
    $(".Port" + i).hide().fadeIn('slow');
  }
});
