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

function btn1(){    

            switch(labNumber){
                case '1':   // 1-а кнопа 1-ої лабораторної
                    showImage(1);
                    break;
                case '2':   // 1-а кнопа 2-ої лабораторної
                    showImage(1);
                    break;
                case '3':   // 1-а кнопа 3-ої лабораторної
                    showImage(1);
                    break;
                case '4':   // 1-а кнопа 4-ої лабораторної
                    showImage(1);
                    break;
                case '5':   // 1-а кнопа 5-ої лабораторної
                    showImage(1);
                    break;
            }

}

function btn2(){

            switch(labNumber){
                case '1':   // 2-а кнопа 1-ої лабораторної
                    showImage(2);
                    break;
                case '2':   // 2-а кнопа 2-ої лабораторної
                    showImage(2);
                    break;
                case '3':   // 2-а кнопа 3-ої лабораторної
                    showImage(2);
                    break;
                case '4':   // 2-а кнопа 4-ої лабораторної
                    showImage(2);
                    break;
                case '5':   // 2-а кнопа 5-ої лабораторної
                    showImage(2);
                    break;
            }

}


function btn3(){

            switch(labNumber){
                case '1':
                    showImage(3);
                    break;
                case '2':
                    showImage(3);
                    break;
                case '3':
                    showImage(3);
                    break;
                case '4':
                    showImage(3);
                    break;
                case '5':
                    showImage(3);
                    break;
            }

}

function btn4(){

            switch(labNumber){
                case '1':
                    showImage(4);
                    break;
                case '2':
                    showImage(4);
                    break;
                case '3':
                    showImage(4);
                    break;
                case '4':
                    showImage(4);
                    break;
                case '5':
                    showImage(4);
                    break;
            }

}

function btn5(){

            switch(labNumber){
                case '1':
                    showImage(5);
                    break;
                case '2':
                    showImage(5);
                    break;
                 case '3':
                    showImage(5);
                    break;
                case '4':
                    showImage(5);
                    break;
                case '5':
                    showImage(5);
                    break;
            }

}

function btn6(){

            switch(labNumber){
                case '1':
                    showImage(6);
                    break;
                case '2':
                    showImage(6);
                    break;
                case '3':   // висновок 3 лаби
                    var c = document.getElementById("cunt");
                    var ctx = c.getContext("2d");
                    ctx.clearRect(0, 0, cunt.width, cunt.height);
    
                    c.width = 1000;
                    c.height = 600;
                    ctx.font = "24px bolder Courier New";
                    ctx.fillText("ВИСНОВОК", 10, 50);
                    var pos = 100;
                    var delta = 30;
                    ctx.font = "18px Courier New";
                    ctx.fillText("У ході даної лабораторної ми роботи ми з'ясували переваги та недоліки верстки веб-сторінок", 10, pos); pos += delta;
                    ctx.fillText("за допомогою плаваючих елементів, а також таблиці.", 10, pos); pos += delta;
                    
                    ctx.font = "20px bolder Courier New";
                    ctx.fillText("Розмітка за допомогою плаваючих блоків:", 10, pos); pos += delta;
                    
                    ctx.font = "18px Courier New";
                    ctx.fillText("+ Менший об'єм коду", 10, pos); pos += delta;
                    ctx.fillText("+ Зменшується час завантаження сторінки", 10, pos); pos += delta;
                    ctx.fillText("+ Редагувати елементи дуже просто", 10, pos); pos += delta;
                    ctx.fillText("+ Код читабельний", 10, pos); pos += delta;
                    ctx.fillText("- Важча у засвоєнні", 10, pos); pos += delta;
                    ctx.fillText("- Потребує більше зусиль для забезпечення кросбраузерності", 10, pos); pos += delta;
                    
                    ctx.font = "20px bolder Courier New";
                    ctx.fillText("Розмітка за допомогою таблиці:", 10, pos); pos += delta;
                    
                    ctx.font = "18px Courier New";
                    ctx.fillText("+ Кросбраузерна", 10, pos); pos += delta;
                    ctx.fillText("+ Проста у засвоєнні", 10, pos); pos += delta;
                    ctx.fillText("- Великий об'єм коду", 10, pos); pos += delta;
                    ctx.fillText("- Низька читабельність коду", 10, pos); pos += delta;
                    ctx.fillText("На нашу думку, не зважаючи на деякі недоліки, верстка плаваючими блоками володіє масою", 10, pos); pos += delta;
                    ctx.fillText("важливіших преваг ніж верстка таблицею.", 10, pos); pos += delta;
                    break;
                case '4':
                    showImage(6);
                    break;
                case '5':
                    showImage(6);
                    break;
            }

}

function btn7(){

            switch(labNumber){
                case '1':
                    showImage(7);
                    break;
                case '2':
                    showImage(7);
                    break;
                case '3':
                    showImage(7);
                    break;
                case '4':
                    showImage(7);
                    break;
                case '5':
                    showImage(7);
                    break;
            }

}

function btn8(){

            switch(labNumber){
                case '1':   // висновок 1 лаби
                    var c = document.getElementById("cunt");
                    var ctx = c.getContext("2d");
                    ctx.clearRect(0, 0, cunt.width, cunt.height);

                    c.width = 1000;
                    c.height = 600;
                    ctx.font = "24px bolder Courier New";
                    ctx.fillText("ВИСНОВОК", 10, 50);
                    var pos = 100;
                    var delta = 30;
                    ctx.font = "18px Courier New";
                    ctx.fillText("У ході даної лабораторної ми роботи ми ознайомилися із структурою HTML-документу,", 10, pos); pos += delta;
                    ctx.fillText("навчилися додавати на сторінку текст, таблиці, зображення, форми та посилання.", 10, pos); pos += delta;
                    
                    break;
                case '2':
                    showImage(8);
                    break;
                case '4':
                    showImage(8);
                    break;
                case '5':
                    showImage(8);
                    break;
            }

}
        
function btn9(){

            switch(labNumber){
                case '1':
                    showImage(9);
                    break;
                case '2':
                    showImage(9);
                    break;
                case '4':
                    showImage(9);
                    break;
                case '5':   // висновок 5 лаби
                    var c = document.getElementById("cunt");
                    var ctx = c.getContext("2d");
                    ctx.clearRect(0, 0, cunt.width, cunt.height);
        
                    c.width = 1000;
                    c.height = 600;
                    ctx.font = "24px bolder Courier New";
                    ctx.fillText("ВИСНОВОК", 10, 50);
                    var pos = 100;
                    var delta = 30;
                    ctx.font = "18px Courier New";
                    ctx.fillText("У ході даної лабораторної роботи ми навчились додавати до сайту динамічні елементи", 10, pos); pos += delta;
                    ctx.fillText("бібліотеки jQuery, працювати з плагіном UniteGallery, інформерами та", 10, pos); pos += delta;
                    ctx.fillText("додавати до сторінки кнопки соціальних мереж.", 10, pos); pos += delta;
                
                    break;
            }

}

function btn10(){
    var c = document.getElementById("cunt");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, cunt.width, cunt.height);
    
    switch(labNumber){
        case '2':   // висновок 2 лаби
            c.width = 1000;
            c.height = 600;
            ctx.font = "24px bolder Courier New";
            ctx.fillText("ВИСНОВОК", 10, 50);
            var pos = 100;
            var delta = 30;
            ctx.font = "18px Courier New";
            ctx.fillText("У ході даної лабораторної ми роботи ми навчилися оформляти текстові елементи,", 10, pos); pos += delta;
            ctx.fillText("працювати з селекторами, ідентифікаторами, списками, зовнішніми та внутрішніми", 10, pos); pos += delta;
            ctx.fillText("відступами (margin і padding), а також із плаваючими елементами.", 10, pos); pos += delta;
            break;
        case '4':   // висновок 4 лаби
            c.width = 1000;
            c.height = 600;
            ctx.font = "24px bolder Courier New";
            ctx.fillText("ВИСНОВОК", 10, 50);
            var pos = 100;
            var delta = 30;
            ctx.font = "18px Courier New";
            ctx.fillText("У ході даної лабораторної роботи ми навчилися працювати з масивами даних у JS.", 10, pos); pos += delta;
            ctx.fillText("Також ми застосували 4 способи функціонального застосування JavaScript:", 10, pos); pos += delta;
            ctx.fillText("гіпертекстове посилання, обробник подій, підстановка, вставка.", 10, pos); pos += delta;
        
            break;
        case '5':
            showImage(10);
            break;
    }

}

function btn11(){

    switch(labNumber){
        case '2':
            showImage(11);
            break;
        case '4':
            showImage(11);
            break;
    }

}

function showImage(button){
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
