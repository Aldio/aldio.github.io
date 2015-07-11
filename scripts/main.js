$( document ).ready(function() {
  for(var i = 1; i <= 6; i++ ){
    $(".Port" + i).hide().fadeIn(1200);
  }
});





var curYPos = 0,
    curXPos = 0,
    curDown = false;


window.addEventListener('mousemove', function(e){
  if(curDown === true){
    $(".portsbar").scrollLeft(document.body.scrollLeft + (curXPos - e.pageX), document.body.scrollTop + (curYPos - e.pageY));
  }
});

window.addEventListener('mousedown', function(e){
    var element = e.target;
    // $.contains( document.body, document.documentElement )
    if(element.parent(".portBackground")){
        curDown = true;
    }
    curYPos = e.pageY;
    curXPos = e.pageX;
 });
window.addEventListener('mouseup', function(e){ curDown = false; });
