window.onload = function (){ 

  document.onclick = function(event) {
    //console.log(event.target.tagName);
    event = event || window.event;
    if (event.target.tagName == 'IMG'){
      event.target.classList.add('bordered');
    }
  }

  document.querySelector('.test').onmousemove = function (event){
    event = event || window.event;
    var x = document.querySelector('#offx');
    x.innerHTML = event.offsetX;
    var y = document.querySelector('#offy');
    y.innerHTML = event.offsetY;
    console.log(event);
  }
}