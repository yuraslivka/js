document.getElementById('my_slide').onmousemove = function (event) {
  var x = event.offsetX;
  document.getElementById('two').style.width = x + 'px';
}


var load = 0;
var bar = document.getElementById('bar2');
move();
function move(){
  bar.style.width = load + 'px';
  load+=5;
  timer = setTimeout(move, 50);
  if (load > 500){
    clearTimeout(timer);
   }
}

var go = document.getElementById('start').onclick = function(){
  var bar_start = document.getElementById('bar2');
  bar_start.style.width = 0 + 'px';
  load = 0;
  move();
}

var str = '';
document.getElementById('test').onkeypress = function(event){
    str = str + event.key;
    console.log(str);
    this.value += String.fromCharCode(getRandomInt(65,122));
    return false;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}




