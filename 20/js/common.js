$(document).ready(function(){
  getRate();
 /* getHistoryRate();*/
 wether();
 /*$('input[type="date"]').on('input', getHistoryRate);*/
 $("#rate").click(function(){
   getHistoryRate();
   
 });
});

  function getRate(){
    $.get(
      "https://api.coindesk.com/v1/bpi/currentprice.json",
      function (data){
        data = JSON.parse(data);
        console.log(data);
        console.log(data.bpi.USD.rate_float);
       $("#code").html(' ' + data.bpi.USD.code);
       $("#out").html(' ' + data.bpi.USD.rate_float);
       var a = localStorage.rate;
       localStorage.rate = $('#out').html();
       if (a>data.bpi.USD.rate_float){
        $("#out").after('<img src="./img/down.png" alt="" id="arrow">');
        } else $("#out").after('<img src="./img/up.png" alt="" id="arrow">');

      }
      
    );
    

  }

  function getHistoryRate(){
    $.get(
      "https://api.coindesk.com/v1/bpi/historical/close.json",
      {
        "start" :$('#date1').val( ),
        "end" :$('#date2').val()
      },
      function (data){
        data = JSON.parse(data);
        console.log(data);
        console.log(data.bpi);
        
      }
    );
  }



  function wether(){
  fetch('http://api.openweathermap.org/data/2.5/weather?id=710719&APPID=0d8cc4c05305475d6b422fbfb0259031')
      .then(function(resp){return resp.json()})
      .then(function(data){
        console.log(data);
        document.querySelector('#city').textContent = data.name;
        document.querySelector('#degree').innerHTML = Math.round(data.main.temp-273) + '&deg';
        let w = data.weather[0]['main'];
        console.log(w);
        let wetherArr = {
          "Clouds" : "Пасмурно"
        }
        console.log(wetherArr[w]);
        document.querySelector('#disclamer').textContent = wetherArr[w];
        document.querySelector('#image').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        
      })
      .catch(function(){

      });

  }

  


  
