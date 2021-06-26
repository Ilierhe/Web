

document.getElementById('btn0').onclick = function() {

        var a = prompt("Вывести текст? или не надо? Принимаютмя ответы: 'Да' или 'Нет'")
        if (a == "да" || a == "Да") {
            alert("Вы выбрали 'Да', и это правильный выбор, ведь вы сегодня очень красивый!")
        }
        else if (b == "нет" || b == "Нет") {
            alert("Вы выбрали 'Нет', поэтому текста не получите!")
        }
        else {
            alert("Вы ввели чтото необьяснимое")
        }
}

document.getElementById('btn1').onclick = function() {
    var b = prompt("Введите свой знак зодиака, незнакомец!")


        switch (b) {
            case 'Овен':
                alert("Здравствуйте, господин Овен!")
                break
            case 'Телец':
                alert("Здравствуйте, господин Телец!")
                break
            case 'Близнецы':
                alert("Здравствуйте, господин Близнецы!")
                break
            case 'Рак':
                alert("Здравствуйте, господин Рак!")
                break
            case 'Лев':
                alert("Здравствуйте, господин Лев!")
                break
            case 'Дева':
                alert("Здравствуйте, господин Дева!")
                break
            case 'Весы':
                alert("Здравствуйте, господин Весы!")
                break
            case 'Скорпион':
                alert("Здравствуйте, господин Скорпион!")
                break
            case 'Стрелец':
                alert("Здравствуйте, господин Стрелец!")
                break
            case 'Козерог':
                alert("Здравствуйте, господин Козерог!")
                break
            case 'Водолей':
                alert("Здравствуйте, господин Водолей!")
                break
            case 'Рыбы':
                alert("Здравствуйте, господин Рыбы!")
                break
                case 'овен':
                alert("Здравствуйте, господин Овен!")
                break
            case 'телец':
                alert("Здравствуйте, господин Телец!")
                break
            case 'близнецы':
                alert("Здравствуйте, господин Близнецы!")
                break
            case 'рак':
                alert("Здравствуйте, господин Рак!")
                break
            case 'лев':
                alert("Здравствуйте, господин Лев!")
                break
            case 'дева':
                alert("Здравствуйте, господин Дева!")
                break
            case 'весы':
                alert("Здравствуйте, господин Весы!")
                break
            case 'скорпион':
                alert("Здравствуйте, господин Скорпион!")
                break
            case 'стрелец':
                alert("Здравствуйте, господин Стрелец!")
                break
            case 'козерог':
                alert("Здравствуйте, господин Козерог!")
                break
            case 'водолей':
                alert("Здравствуйте, господин Водолей!")
                break
            case 'рыбы':
                alert("Здравствуйте, господин Рыбы!")
                break

            default:
                alert("Вы ввели чтото очень необычное! ")
                break
        }
}

document.getElementById('btn4').onclick = function() {
    var b = true
        while (b) {
            var t = prompt("Введите любое число больше 5")
            if (t > 5) {
                alert("Поздравляю! Вы справились!")
                b = false
            }
        }
}

document.getElementById('btn5').onclick = function() {
    for (let i = 8; i <= 20; i++) {
            if (i % 2 == 0) {
                alert(i);
            }
    }
}

document.getElementById('btn6').onclick = function() {
    for (let i = 1; i <= 7; i++) {
            if (i % 2 != 0) {
                if (i != 5) {
                    alert(i);
                }                
            }
        }
}

document.getElementById('btn7').onclick = function() {
var b = prompt("Привет, как тебя зовут?")
     if(b != null){
        alert("Привет, " + b);
	    }
}








































$(function(){ 
$('.btn__menu').on('click', function(){
$('.menu__list').slideToggle();
})                  
});