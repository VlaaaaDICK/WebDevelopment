var labNumber = '';
var inLink = false;

function changeLab(number){
            var c = document.getElementById("cunt");
            var ctx = c.getContext("2d");
            
            changeLab2(number);

            labNumber = number;
            document.getElementById('btn1').innerHTML = "Постановка задачі ЛP №" + labNumber;
            
            switch(labNumber){
                case '1':   // змінюємо кнопки для 1-ої лабораторної
                    document.getElementById('btn2').innerHTML = "Опис предметного середовища";
                    document.getElementById('btn3').innerHTML = "Загальна постановка <br> задачі програми";
                    document.getElementById('btn4').innerHTML = "Структура документа";
                    document.getElementById('btn5').innerHTML = "HTML-код таблиць";
                    document.getElementById('btn6').innerHTML = "HTML-код форми";
                    document.getElementById('btn7').innerHTML = "HTML-код зображення";
                    document.getElementById('btn8').innerHTML = "Висновок";
                    document.getElementById('btn9').innerHTML = "Вигляд сайту";

                    break;
                case '2':   // змінюємо кнопки для 2-ої лабораторної
                    document.getElementById('btn2').innerHTML = "Списки";
                    document.getElementById('btn3').innerHTML = "Ідентифікатори";
                    document.getElementById('btn4').innerHTML = "Відступи";
                    document.getElementById('btn5').innerHTML = "Плаваючі елементи";
                    document.getElementById('btn6').innerHTML = "Селектори";
                    document.getElementById('btn7').innerHTML = "Селектори тегу і класу";
                    document.getElementById('btn8').innerHTML = "Інші селектори";
                    document.getElementById('btn9').innerHTML = "Групування селекторів";
                    document.getElementById('btn10').innerHTML = "Висновок";
                    document.getElementById('btn11').innerHTML = "Вигляд сайту";

                    break;
                case '3':   // змінюємо кнопки для 3-ої лабораторної
                    //document.getElementById('btn2').innerHTML = "<a href='lab3.html'>Зовнішній вигляд макету</a>";
                    document.getElementById('btn2').innerHTML = "Зовнішній вигляд макету";
                    document.getElementById('btn3').innerHTML = "HTML-код макету";
                    document.getElementById('btn3').style.textDecoration = "none";
                    document.getElementById('btn4').innerHTML = "Розмітка сторінки за допомогою таблиці";
                    document.getElementById('btn5').innerHTML = "Розмітка сторінки за допомогою плаваючих блоків";
                    document.getElementById('btn6').innerHTML = "Висновок";
                    document.getElementById('btn7').innerHTML = "Вигляд сайту";
                    break;
                case '4':   // змінюємо кнопки для 4-ої лабораторної
                    document.getElementById('btn2').innerHTML = "Способи функціонального застосування JS";
                    document.getElementById('btn3').innerHTML = "Схема URL";
                    document.getElementById('btn4').innerHTML = "Обробник подій";
                    document.getElementById('btn5').innerHTML = "Підстановка (entity)";
                    document.getElementById('btn6').innerHTML = "Вставка (тег SCRIPT)";
                    document.getElementById('btn7').innerHTML = "Масиви Поліщук";
                    document.getElementById('btn8').innerHTML = "Масиви Федор";
                    document.getElementById('btn9').innerHTML = "Виконання 6 понкту";
                    document.getElementById('btn10').innerHTML = "Висновок";
                    document.getElementById('btn11').innerHTML = "Вигляд сайту";

                    break;
                case '5':   // змінюємо кнопки для 5-ої лабораторної
                    document.getElementById('btn2').innerHTML = "Динамічні елементи третього пункту";
                    document.getElementById('btn3').innerHTML = "Галерея UniteGallery";
                    document.getElementById('btn4').innerHTML = "Фотогалерея";
                    document.getElementById('btn5').innerHTML = "Слайдер фотографій";
                    document.getElementById('btn6').innerHTML = "Слайдер відеоматеріалів";
                    document.getElementById('btn7').innerHTML = "Кнопки соціальних мереж";
                    document.getElementById('btn8').innerHTML = "Інформери";
                    document.getElementById('btn9').innerHTML = "Висновок";
                    document.getElementById('btn10').innerHTML = "Вигляд сайту";

                    break;
            }
}

function btnClick(button){
    var c = document.getElementById("cunt");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, cunt.width, cunt.height);
    
    var img = new Image();
    img.src = "reports/" + labNumber + "_" + button + ".PNG";
    img.onload = function() {
        c.width = img.width;
        c.height = img.height;
        ctx.drawImage(img, 0, 0);
    }
}


function changeLab2(number){

    var lab = [];
    switch(number){
        case '1':                                   // № лабораторної роботи
            lab = [,1,2,3,4,-5,-6,-7,8,9,0,0,0];    // додатні числа - № великої кноп очки
            break;                                  // від'ємні числа - № маленької кноп очки
        case '2':                                   // 0 - кнопка не відображається
            lab = [,1,2,3,4,5,6,-7,-8,-9,10,11,0];
            break;
        case '3':            
            lab = [,1,2,3,4,5,6,7,0,0,0,0,0];
            break;
        case '4':            
            lab = [,1,2,3,-4,-5,-6,7,8,9,0,0,0];
            break;
        case '5':            
            lab = [,1,2,3,-4,-5,-6,7,8,9,10,0,0];
            break;
        case '6':            
            lab = [,1,2,3,4,5,6,7,8,9,10,11,0];
            break;
        case '7':            
            lab = [,1,2,3,4,5,6,7,8,9,10,11,0];
            break;
        case '8':            
            lab = [,1,2,3,4,5,6,7,8,9,10,11];
            break;
    }

    for(var i = 1; i < 13; i++){
        if(lab[i] > 0){
            document.getElementById('btn' + i).style.width = "280px";
            document.getElementById('btn' + i).style.marginLeft = "20px";
        }
        if(lab[i] < 0){
            document.getElementById('btn' + i).style.width = "200px";
            document.getElementById('btn' + i).style.marginLeft = "100px";
        }
        if(lab[i] == 0){
            document.getElementById('btn' + i).innerHTML = "";
        }
    }
}
