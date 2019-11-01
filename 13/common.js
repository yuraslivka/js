window.onload = function (){ 
  
  document.querySelector('#menu').onmouseover = menuShow;
  document.querySelector('#menu').onmouseout = menuHide;
  document.onkeydown = function (event) {
    
    if (event.code == "KeyM") menuShow();
    if (event.code == "Escape") menuHide();
  }

  function menuShow(){
    document.querySelector('#menu').style.left = 0;
  }

  function menuHide(){
    document.querySelector('#menu').style.left = '-240px';
  }

  document.querySelector('.tabs-header').addEventListener('click', fTabs);
//----------------------------------------------
  function fTabs(event) {
    //console.log(event.target.getAttribute('data-tab'));
      if (event.target.className == 'tab-h'){
        var dataTab = event.target.getAttribute('data-tab');
        
        var tabH = document.getElementsByClassName('tab-h');
        for (var i=0; i<tabH.length; i++){
          tabH[i].classList.remove('active');
        }
        event.target.classList.add('active');
        

        var tabBody = document.getElementsByClassName('tab-b');
        for (var i=0; i<tabBody.length; i++){
          if (dataTab == i){
            tabBody[i].style.display = 'block';
            tabBody[i].style.background = 'yellowgreen';
            }
            else {tabBody[i].style.display = 'none';}
        }
      }

  }
  //--------------------------------------------------


  function equalHeight(){
    document.querySelector('.left').style.height = 'auto';
    document.querySelector('.right').style.height = 'auto';
    var left = document.querySelector('.left').offsetHeight;
    var right = document.querySelector('.right').offsetHeight;
    console.log(left);
    console.log(right);
    if (left > right) {
      document.querySelector('.right').style.height = left + 'px';
    }
    else document.querySelector('.left').style.height = right + 'px';

  }
  equalHeight();
  window.onresize = equalHeight;
}