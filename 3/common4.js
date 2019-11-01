document.onmousemove = function (){
  document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', '<img src="1.png" alt="" id="bat">');
  var bat = document.getElementById('bat');
  bat.style.position = 'fixed';

  document.onmousemove = function(event){
    bat.style.left = event.clientX +20+ 'px';
    bat.style.top = event.clientY +20+ 'px';
  }
}





//