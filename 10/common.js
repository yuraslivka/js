window.onload = function (){ 
  if (localStorage.getItem('bgcolor')!=null){
    var color = localStorage.getItem('bgcolor');
    document.getElementsByTagName('body')[0].style.background = color;
  }

  document.getElementById('colorset').onclick = function(){
    var a = document.getElementById('color1').value;
    var b = document.getElementById('color2').value;
    var c = document.getElementById('color3').value;
    var d = 'rgb('+a+', '+b+', '+c+')';
    document.getElementsByTagName('body')[0].style.background = d;
    localStorage.setItem('bgcolor', d);
  }

  document.getElementById('blue').onclick = function(){
    document.getElementsByTagName('body')[0].style.background = 'blue';
    localStorage.setItem('bgcolor','blue');
  }
//--------------------------------------------


  var todolist = [];
  if (localStorage.getItem('todo')!=undefined) {
    todolist = JSON.parse(localStorage.getItem('todo'));
    out();
  }

  document.getElementById('add').onclick = function(){
    var d = document.getElementById('in').value;

    var temp = {};
    temp.todo = d;
    temp.check = false;
    var i = todolist.length;
    todolist[i]=temp;
    console.log(todolist);
    out();
    localStorage.setItem('todo', JSON.stringify(todolist));
  }
  function out(){
    var out = '';
    for (var key in todolist){
      if (todolist[key].check == true){
        out += '<input type="checkbox" checked>';
      }
      else {
        out += '<input type="checkbox">';
      }
      out += todolist[key].todo + '<br>';;
      document.getElementById('out').innerHTML = out;
    }
  }

}