var goods = {
      "57574" : {
        "name" : "banana",
        "cost" : "30",
        "img" : "2.png"
      },
      "58585" : {
        "name" : "coconut",
        "cost" : "20",
        "img" : "1.png"
      }

}

console.log(goods);

var out='';

for (var key in goods){
  out+='Name: '+goods[key].name + ' - ';
  out+='cost: '+goods[key].cost;
  out+='<img src="'+goods[key].img + '"><br>';
}
document.getElementById("outl3").innerHTML=out;


var block = document.getElementById('one');

block.onclick=function(){
  this.style.backgroundColor = 'darkslategray';
}

block.ondblclick=function(){
  this.style.backgroundColor = 'chocolate';

}

block.onmouseenter =function(){
  this.style.backgroundColor = 'green';
}

block.onmouseleave =function(){
  this.style.backgroundColor = 'red';
}

var a=0;
block.onmousedown =function(event){
  a++;
  if (a<=1000){
  a++;
  this.style.width = 100 + a + 'px';}
  else {
    a = 0;
  }
  if (event.button === 0){
    this.style.backgroundColor = 'yellow';
  }
  else {
    this.style.borderRadius = '50%';
    this.style.backgroundColor = 'white';}
  console.log(event.button);
}

block.onmouseup =function(){
  this.style.borderRadius = '0%';
}
