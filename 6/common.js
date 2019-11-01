window.onload = function (){

var left = 400;
var scrolled = 0;
var timer = 0;

document.getElementById('test').onwheel = function(event) {
  //console.log(event);
  if (event.deltaY>0){
    left = left + 1;
    var dely2 = document.getElementById('delY');
    dely2.innerHTML = ' вверх ' + left;
    }
  else {
    left = left - 1;
    var dely2 = document.getElementById('delY2');
    dely2.innerHTML = ' вниз ' + left;
  }
  var wheel = document.getElementById('test2');
  wheel.style.left = left + 'px';
  return false;
}
//прокрутка страницы по нажатию на кнопку
document.getElementById('top').onclick = function() {
  console.log(window.pageYOffset);
  //window.scrollTo(0,0);
  scrolled = window.pageYOffset;
  scrolltoTop();
}
function scrolltoTop() {
    if (scrolled>0){
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 100;
      timer = setTimeout(scrolltoTop, 100);
    }
    else {
      clearTimeout(timer);
      window.scrollTo(0,0);
    }
}



}