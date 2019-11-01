window.onload = function (){ 
  
  document.querySelector('#menu').onmouseover = menuShow;
  document.querySelector('#menu').onmouseout = menuHide;
  document.onkeydown = function (event) {
    console.log(event);
    if (event.code == "KeyM") menuShow();
    if (event.code == "Escape") menuHide();
  }

  function menuShow(){
    document.querySelector('#menu').style.left = 0;
  }

  function menuHide(){
    document.querySelector('#menu').style.left = '-240px';
  }
  //-------------------------------
  setInterval(fsec, 500);
  var s = 0;
  var m = 0;

  function fsec(){
    document.querySelector('#sec').style.transform = 'rotate('+ s +'deg)';
    document.querySelector('#min').style.transform = 'rotate('+ m +'deg)';
    if (s+6 == 366){
      s=0;
      if (m+6 == 366){
        m=0;
      }
      m=m+6;
    }
    s = s + 6;
  }
}