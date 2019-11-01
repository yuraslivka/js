window.onload = function (){ 
  var mas = document.getElementsByClassName('layer');
  var y = 0;
  var j = 0;
  document.querySelector('.lehmann').onmousewheel = function(event){
    event = event || window.event;
    y = y + Math.round(event.deltaY)/10;
    mas[j].style.top = -y + 'px';

    if (y>450) {
      j++;
      y=0;
      if (j==mas.length-1){
        document.querySelector('.lehmann').onmousewheel = null;
      }
    } 
    console.log(y);
    
    

  }

}