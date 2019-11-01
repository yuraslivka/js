var block = document.getElementById('test');
var left = 0;
var ad = 0;

document.onkeydown = function (event){
  //console.log(event);
  if (event.key == 'ArrowRight'){
        
    let div = document.createElement('div');
    div.id = "test";
    x = getRandomInt(0,800);
    y = getRandomInt(0,800);
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    document.body.append(div);
 
  }
  if (event.key == 'ArrowLeft'){
    let div = document.createElement('div');
    div.id = "test2";
    x = getRandomInt(0,800);
    y = getRandomInt(0,800);
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    document.body.append(div);
  }
  if (event.key == 'ArrowDown'){
    let div = document.createElement('div');
    div.id = "test3";
    x = getRandomInt(0,800);
    y = getRandomInt(0,800);
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    document.body.append(div);
  }
  if (event.key == 'ArrowUp'){
    let div = document.createElement('div');
    div.id = "test4";
    x = getRandomInt(0,800);
    y = getRandomInt(0,800);
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    document.body.append(div);
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}