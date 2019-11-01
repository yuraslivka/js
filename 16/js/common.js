$(document).ready(function(){
  showModal();
  progressbar();
})

function showModal(){
  if (localStorage.getItem('modalOk')!=1){
      setTimeout(function(){
        $('#exampleModal').modal('show');
        $('#modal-ok').on('click',function(){
          localStorage.setItem('modalOk', 1);
          $('#exampleModal').modal('hide');
        });

      }, 5000);
  }
}

var x = 20;
var y = 1000;

function progressbar() {
  
    prog = setTimeout(function(){
      var p = document.querySelector('.progress-bar');
      p.style.width = x +'%';
      p.innerHTML = x/20;
      x = x+20;
      progressbar();
      console.log(p.style.width);}, y);

    if (x/20 > 5){
      clearTimeout(prog);
      userProgressCallBack();
    }
}

function userProgressCallBack() {
  if (localStorage.getItem('modalOk')!=1){
    var a = document.querySelector('.alert');
  a.style.display = 'block';
  }
  else {
    var b = document.querySelector('.al2');
  b.style.display = 'block';
  }
  
  
}