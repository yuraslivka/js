window.onload = function (){ 

  var canvas = document.getElementById('can');
  var ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.lineWidth = "5";
  ctx.moveTo(100,50);
  ctx.lineTo(150,150);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = "20";
  ctx.moveTo(150,50);
  ctx.lineTo(300,50);
  ctx.lineTo(300,150);
  ctx.lineCap = "round";
  ctx.stroke();

}