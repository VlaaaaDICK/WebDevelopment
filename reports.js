var labNumber = '';
var inLink = false;

function changeLab(number){
            var c = document.getElementById("cunt");
            var ctx = c.getContext("2d");
            //ctx.clearRect(0, 0, cunt.width, cunt.height);
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
                    document.getElementById('btn10').innerHTML = "";
                    document.getElementById('btn11').innerHTML = "";
                    
                    document.getElementById('btn1').style.width = "280px";
                    document.getElementById('btn1').style.marginLeft = "20px";
                    document.getElementById('btn2').style.width = "280px";
                    document.getElementById('btn2').style.marginLeft = "20px";
                    document.getElementById('btn3').style.width = "280px";
                    document.getElementById('btn3').style.marginLeft = "20px";
                    document.getElementById('btn4').style.width = "280px";
                    document.getElementById('btn4').style.marginLeft = "20px";
                    document.getElementById('btn5').style.width = "200px";
                    document.getElementById('btn5').style.marginLeft = "100px";
                    document.getElementById('btn6').style.width = "200px";
                    document.getElementById('btn6').style.marginLeft = "100px";
                    document.getElementById('btn7').style.width = "200px";
                    document.getElementById('btn7').style.marginLeft = "100px";
                    document.getElementById('btn8').style.width = "280px";
                    document.getElementById('btn8').style.marginLeft = "20px";
                    document.getElementById('btn9').style.width = "280px";
                    document.getElementById('btn9').style.marginLeft = "20px";
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

                    document.getElementById('btn1').style.width = "280px";
                    document.getElementById('btn1').style.marginLeft = "20px";
                    document.getElementById('btn2').style.width = "280px";
                    document.getElementById('btn2').style.marginLeft = "20px";
                    document.getElementById('btn3').style.width = "280px";
                    document.getElementById('btn3').style.marginLeft = "20px";
                    document.getElementById('btn4').style.width = "280px";
                    document.getElementById('btn4').style.marginLeft = "20px";
                    document.getElementById('btn5').style.width = "280px";
                    document.getElementById('btn5').style.marginLeft = "20px";
                    document.getElementById('btn6').style.width = "280px";
                    document.getElementById('btn6').style.marginLeft = "20px";
                    document.getElementById('btn7').style.width = "200px";
                    document.getElementById('btn7').style.marginLeft = "100px";
                    document.getElementById('btn8').style.width = "200px";
                    document.getElementById('btn8').style.marginLeft = "100px";
                    document.getElementById('btn9').style.width = "200px";
                    document.getElementById('btn9').style.marginLeft = "100px";
                    document.getElementById('btn10').style.width = "280px";
                    document.getElementById('btn10').style.marginLeft = "20px";
                    document.getElementById('btn11').style.width = "280px";
                    document.getElementById('btn11').style.marginLeft = "20px";
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
                    document.getElementById('btn8').innerHTML = "";
                    document.getElementById('btn9').innerHTML = "";
                    document.getElementById('btn10').innerHTML = "";
                    document.getElementById('btn11').innerHTML = "";

                    document.getElementById('btn1').style.width = "280px";
                    document.getElementById('btn1').style.marginLeft = "20px";
                    document.getElementById('btn2').style.width = "280px";
                    document.getElementById('btn2').style.marginLeft = "20px";
                    document.getElementById('btn3').style.width = "280px";
                    document.getElementById('btn3').style.marginLeft = "20px";
                    document.getElementById('btn4').style.width = "280px";
                    document.getElementById('btn4').style.marginLeft = "20px";
                    document.getElementById('btn5').style.width = "280px";
                    document.getElementById('btn5').style.marginLeft = "20px";
                    document.getElementById('btn6').style.width = "280px";
                    document.getElementById('btn6').style.marginLeft = "20px";
                    document.getElementById('btn7').style.width = "280px";
                    document.getElementById('btn7').style.marginLeft = "20px";
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


                    document.getElementById('btn1').style.width = "280px";
                    document.getElementById('btn1').style.marginLeft = "20px";
                    document.getElementById('btn2').style.width = "280px";
                    document.getElementById('btn2').style.marginLeft = "20px";
                    document.getElementById('btn3').style.width = "280px";
                    document.getElementById('btn3').style.marginLeft = "20px";
                    document.getElementById('btn4').style.width = "200px";
                    document.getElementById('btn4').style.marginLeft = "100px";
                    document.getElementById('btn5').style.width = "200px";
                    document.getElementById('btn5').style.marginLeft = "100px";
                    document.getElementById('btn6').style.width = "200px";
                    document.getElementById('btn6').style.marginLeft = "100px";
                    document.getElementById('btn7').style.width = "280px";
                    document.getElementById('btn7').style.marginLeft = "20px";
                    document.getElementById('btn8').style.width = "280px";
                    document.getElementById('btn8').style.marginLeft = "20px";
                    document.getElementById('btn9').style.width = "280px";
                    document.getElementById('btn9').style.marginLeft = "20px";
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
                    document.getElementById('btn11').innerHTML = "";


                    document.getElementById('btn1').style.width = "280px";
                    document.getElementById('btn1').style.marginLeft = "20px";
                    document.getElementById('btn2').style.width = "280px";
                    document.getElementById('btn2').style.marginLeft = "20px";
                    document.getElementById('btn3').style.width = "280px";
                    document.getElementById('btn3').style.marginLeft = "20px";
                    document.getElementById('btn4').style.width = "200px";
                    document.getElementById('btn4').style.marginLeft = "100px";
                    document.getElementById('btn5').style.width = "200px";
                    document.getElementById('btn5').style.marginLeft = "100px";
                    document.getElementById('btn6').style.width = "200px";
                    document.getElementById('btn6').style.marginLeft = "100px";
                    document.getElementById('btn7').style.width = "280px";
                    document.getElementById('btn7').style.marginLeft = "20px";
                    document.getElementById('btn8').style.width = "280px";
                    document.getElementById('btn8').style.marginLeft = "20px";
                    document.getElementById('btn9').style.width = "280px";
                    document.getElementById('btn9').style.marginLeft = "20px";
                    document.getElementById('btn10').style.width = "280px";
                    document.getElementById('btn10').style.marginLeft = "20px";
                    break;
            }
}

function btn1(){    
            var c = document.getElementById("cunt");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, cunt.width, cunt.height);

            switch(labNumber){
                case '1':   // 1-а кнопа 1-ої лабораторної
                    var img = new Image();
                    img.src = "reports/1_1.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 10);
                    }
                    break;
                case '2':   // 1-а кнопа 2-ої лабораторної
                    var img = new Image();
                    img.src = "reports/2_1.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
                case '3':   // 1-а кнопа 3-ої лабораторної
                    var img = new Image();
                    img.src = "reports/3_1.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
                case '4':   // 1-а кнопа 4-ої лабораторної
                    var img = new Image();
                    img.src = "reports/4_1.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
                case '5':   // 1-а кнопа 5-ої лабораторної
                    var img = new Image();
                    img.src = "reports/5_1.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
            }

}

function btn2(){
            var c = document.getElementById("cunt");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, cunt.width, cunt.height);

            switch(labNumber){
                case '1':   // 2-а кнопа 1-ої лабораторної
                    ctx.font = "30px Arial";
                    ctx.fillText("Постановка задачі", 10, 50);

                    var img = new Image();
                    img.src = "reports/1_2.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }
                    break;
                case '2':   // 2-а кнопа 2-ої лабораторної
                    var img = new Image();
                    img.src = "reports/2_2.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }
                    break;
                case '3':   // 2-а кнопа 3-ої лабораторної
                    var img = new Image();
                    img.src = "reports/3_2.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }
                    break;
                case '4':   // 2-а кнопа 4-ої лабораторної
                    var img = new Image();
                    img.src = "reports/4_2.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
                case '5':   // 2-а кнопа 5-ої лабораторної
                    var img = new Image();
                    img.src = "reports/5_2.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
            }

}


function btn3(){
            var c = document.getElementById("cunt");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, cunt.width, cunt.height);

            switch(labNumber){
                case '1':
                    var img = new Image();
                    img.src = "reports/1_3.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }
                    break;
                case '2':
                var img = new Image();
                    img.src = "reports/2_3.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }
                    break;
                case '3':
                    var img = new Image();
                    img.src = "reports/3_3.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }
                    break;
                case '4':
                    var img = new Image();
                    img.src = "reports/4_3.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
                case '5':
                    var img = new Image();
                    img.src = "reports/5_3.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
            }

}

function btn4(){
            var c = document.getElementById("cunt");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, cunt.width, cunt.height);

            switch(labNumber){
                case '1':
                    var img = new Image();
                    img.src = "reports/1_4.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }
                    break;
                case '2':
                    var img = new Image();
                    img.src = "reports/2_4.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }
                    break;
                case '3':
                    var img = new Image();
                    img.src = "reports/3_4.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 10);
                    }
                    break;
                case '4':
                    var img = new Image();
                    img.src = "reports/4_4.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
                case '5':
                    var img = new Image();
                    img.src = "reports/5_4.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
            }

}

function btn5(){
            var c = document.getElementById("cunt");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, cunt.width, cunt.height);

            switch(labNumber){
                case '1':
                    var img = new Image();
                    img.src = "reports/1_5.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }
                    break;
                case '2':
                    var img = new Image();
                    img.src = "reports/2_5.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }
                    break;
                 case '3':
                    var img = new Image();
                    img.src = "reports/3_5.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 10);
                    }
                    break;
                case '4':
                    var img = new Image();
                    img.src = "reports/4_5.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
                case '5':
                    var img = new Image();
                    img.src = "reports/5_5.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
            }

}

function btn6(){
            var c = document.getElementById("cunt");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, cunt.width, cunt.height);

            switch(labNumber){
                case '1':
                    var img = new Image();
                    img.src = "reports/1_6.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }
                    break;
                case '2':
                    var img = new Image();
                    img.src = "reports/2_6.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }
                    break;
                case '3':   // висновок 3 лаби
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
                    var img = new Image();
                    img.src = "reports/4_6.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
                case '5':
                    var img = new Image();
                    img.src = "reports/5_6.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
            }

}

function btn7(){
            var c = document.getElementById("cunt");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, cunt.width, cunt.height);

            switch(labNumber){
                case '1':
                    var img = new Image();
                    img.src = "reports/1_7.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }
                    break;
                case '2':
                    var img = new Image();
                    img.src = "reports/2_7.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }
                    break;
                case '3':
                    var img = new Image();
                    img.src = "reports/3_7.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }
                    break;
                case '4':
                    var img = new Image();
                    img.src = "reports/4_7.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
                case '5':
                    var img = new Image();
                    img.src = "reports/5_7.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
            }

}

function btn8(){
            var c = document.getElementById("cunt");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, cunt.width, cunt.height);

            switch(labNumber){
                case '1':   // висновок 1 лаби
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
                var img = new Image();
                    img.src = "reports/2_8.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }
                    break;
                case '4':
                    var img = new Image();
                    img.src = "reports/4_8.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
                case '5':
                    var img = new Image();
                    img.src = "reports/5_8.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }
                    break;
            }

}
        
function btn9(){
            var c = document.getElementById("cunt");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, cunt.width, cunt.height);

            switch(labNumber){
                case '1':
                    var img = new Image();
                    img.src = "reports/1_9.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }
    
                        break;
                case '2':
                    var img = new Image();
                    img.src = "reports/2_9.PNG";
                    img.onload = function() {
                        c.width = img.width;
                        c.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    }

                    break;
                case '4':
                    var img = new Image();
                    img.src = "reports/4_9.PNG";
                    img.onload = function() {
                    c.width = img.width;
                    c.height = img.height;
                    ctx.drawImage(img, 0, 10);
                    }

                    break;
                case '5':   // висновок 5 лаби
                    c.width = 1000;
                    c.height = 600;
                    ctx.font = "24px bolder Courier New";
                    ctx.fillText("ВИСНОВОК", 10, 50);
                    var pos = 100;
                    var delta = 30;
                    ctx.font = "18px Courier New";
                    ctx.fillText("У ході даної лабораторної роботи ми ", 10, pos); pos += delta;
                    ctx.fillText("Також ми застосували ", 10, pos); pos += delta;
                    ctx.fillText("", 10, pos); pos += delta;
                    ctx.fillText("", 10, pos); pos += delta;
                    ctx.fillText("", 10, pos); pos += delta;
                
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
            var img = new Image();
            img.src = "reports/5_10.PNG";
            img.onload = function() {
                c.width = img.width;
                c.height = img.height;
                ctx.drawImage(img, 0, 0);
            }
            break;
    }

}

function btn11(){
    var c = document.getElementById("cunt");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, cunt.width, cunt.height);

    switch(labNumber){
        case '2':
            var img = new Image();
            img.src = "reports/2_11.PNG";
            img.onload = function() {
                c.width = img.width;
                c.height = img.height;
                ctx.drawImage(img, 0, 0);
            }
            break;
        case '4':
            var img = new Image();
            img.src = "reports/4_11.PNG";
            img.onload = function() {
                c.width = img.width;
                c.height = img.height;
                ctx.drawImage(img, 0, 0);
            }
            break;
    }

}
