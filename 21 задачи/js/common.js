function palindrom(str) {
    /*переводим в нижний регистр*/
    str = str.toLowerCase();
    /*разбиваем на масив*/
    let str2 = str.split('');
    /*разворачиваем массив*/
    str2 = str2.reverse();
    /*склеиваем массив*/
    str2 = str2.join(''); 
    /*сравниваем*/
    if (str == str2) return true;
    else return false;
    }


console.log(palindrom('dot.ftod'));
/* альтернативная запись */
function palindrom2(str) {
    /*переводим в нижний регистр*/
    str = str.toLowerCase();
    return str == str.split('').reverse().join('');
    }


console.log(palindrom2('Аргентина манит негра'));