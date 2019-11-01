function f1(){
    var x = document.getElementById('inp1').value;
    x = parseInt(x);
    x = x*x;
    document.getElementById('result').innerHTML =('x2 = '+x);
    document.getElementById('titl').innerHTML =('x2 = '+x);
}

function f2(){
  var y = document.getElementById('out');
  var a = document.getElementById('inp1').value;
    a = parseInt(a);
    var b = 5;
   for  (i=1; i<=a; i++){
       if (i==b){
        b=b+5;
       y.innerHTML += '<b>'+i+'</b> <br>';}
       else 
       {y.innerHTML += i+' ';}
   } 
}

var p = document.getElementsByTagName('p');
console.log(p);

var x2 = document.getElementsByClassName('x2');
x2[0].onclick=f4;

function f4(){
  
  x2[0].style.background="green";}

document.getElementById('r1').oninput=cube;

function cube(){
  var div=document.getElementById('cube');
  var g = document.getElementById('pxx');
  var ta = document.getElementById('outparam');
  div.style.borderRadius = this.value+'px';
  g.innerHTML=this.value;
  ta.innerHTML='border-radius:'+this.value+'px;\n';
  
  var clr=document.getElementById('clr');
  var check=document.getElementsByName('red');
  console.log(check);
  if (check[0].checked){
  div.style.background = clr.value;
  ta.innerHTML+='background: red;';}

}


