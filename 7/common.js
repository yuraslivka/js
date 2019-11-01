window.onload = function (){

    var number = Math.floor(10*Math.random()) + 1;
    console.log(number);
    var count = 3;

    document.getElementById('verify').onclick = function() {
      if (count>0) {
            var usernum = document.getElementById('mynum').value;
            usernum = parseInt(usernum);
            var out = document.getElementById('out');

            if (usernum == number){
              out.innerHTML = '!!!winner!!!';
            }
            else if (usernum > number) {
              out.innerHTML = '++++++++';
            }
            else if (usernum < number) {
              out.innerHTML = '------';
            }
            count = count - 1;
            document.getElementById('count').innerHTML = 'attempts '+count;
        }
        else {
          alert('LOSER!!!!');
          location.reload();
        }
    }
    
}