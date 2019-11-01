window.onload = function (){ 

  var canvas = document.getElementById('can');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'orange';
  ctx.fillRect(100, 50, 150, 75);

  ctx.clearRect(0,0,400,200);

  ctx.strokeStyle = 'green';
  ctx.lineWidth = "10";
  ctx.rect(75, 75, 100, 100);
  ctx.stroke();
  ctx.fill();

}