window.onload = function (){
  document.getElementById('result').onclick = getResult;

  function getResult(){
    var menu = document.getElementsByClassName('menu');
    var cost = 0;
    var kkal = 0;
    for (var i=0; i<menu.length; i++){
      if (menu[i].checked){
        cost += parseFloat(menu[i].getAttribute('data-cost'));
        kkal += parseFloat(menu[i].getAttribute('data-kkal'));
      }
    }
    var outCost = document.getElementById('cost');
    outCost.innerHTML = cost + '$';
    var outKkal = document.getElementById('kkal');
    outKkal.innerHTML = kkal + ' Kkal ';
  }
  getResult();

  /*-----------------Номер карты-------------------*/
  document.querySelector('#card-number').oninput = function() {
    let cardNum = this.value;
    if(cardNum.trim().length>5){
      let cardInfo = new CardInfo(cardNum.trim(),{
        banksLogosPath: ' ./node_modules/card-info/dist/banks-logos/',
        brandsLogosPath: ' ./node_modules/card-info/dist/brands-logos/'
      });
      console.log(cardInfo.bankName);
      var banklogo = document.querySelector('.bank-logo');
      banklogo.src = cardInfo.bankLogo;
      var cardlogo = document.querySelector('.card-logo');
      cardlogo.src = cardInfo.brandLogo;
      var cardbg = document.querySelector('.card-front');
      cardbg.style.background = cardInfo.backgroundColor;
    }
  }
  /*-------------------Алгоритм Луна---------------------------------*/

  document.querySelector('#card-number').oninput = function() {
    let cardNumvalid = this.value;
    valid_credit_card(cardNumvalid);
    if (valid_credit_card(cardNumvalid)){
    console.log(cardNumvalid+":", valid_credit_card(cardNumvalid));
  }
  }

  function valid_credit_card(value) {
    // accept only digits, dashes or spaces
      if (/[^0-9-\s]+/.test(value)) return false;

      // The Luhn Algorithm. It so pretty.
      var nCheck = 0, nDigit = 0, bEven = false;
      value = value.replace(/\D/g, "");

      for (var n = value.length - 1; n >= 0; n--) {
          var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);

          if (bEven) {
              if ((nDigit *= 2) > 9) nDigit -= 9;
          }

          nCheck += nDigit;
          bEven = !bEven;
      }

      return (nCheck % 10) == 0;
  }

/*-------запуск в заданое время------------

  function alertInfo(){
    alert('BOO!!!');
  };

  function checkTime(){
    var timeInSec = Math.round(Date.now()/1000); 
    if(timeInSec > 1572891750){  /*<------сравнение с unix временем
      alertInfo();
    }
   console.log(timeInSec);
  }
  checkTime();
-----------------------------------------*/

document.getElementById('inputText').oninput = function(){
  const offset = 3;
 /* let out = document.getElementById('outCode');
  out.innerHTML = String.fromCharCode(121);*/
  let str = this.value;
  console.log(offset);
  let out = '';
  for(i=0; i<str.length; i++){
    let code = str.charCodeAt(i);
    code = code + offset;
    out += String.fromCharCode(code);
    }
      document.getElementById('inputCode').value = out;
      let str2 = out;
      console.log(str2);
      let out2 = '';
      for(i=0; i<str2.length; i++){
          let code2 = str2.charCodeAt(i);
          code2 = code2 - offset;
          out2 += String.fromCharCode(code2);
        }
        document.getElementById('outCode').innerHTML = out2;
       }
  
  



}

  
