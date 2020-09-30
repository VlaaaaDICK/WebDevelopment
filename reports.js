var labNumber = '';

function changeLab(number){
            var c = document.getElementById("cunt");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, cunt.width, cunt.height);
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
                    document.getElementById('btn8').innerHTML = "";
                    document.getElementById('btn9').innerHTML = "";
                    document.getElementById('btn5').style.width = "200px";
                    document.getElementById('btn5').style.marginLeft = "100px";
                    document.getElementById('btn6').style.width = "200px";
                    document.getElementById('btn6').style.marginLeft = "100px";
                    document.getElementById('btn7').style.width = "200px";
                    document.getElementById('btn7').style.marginLeft = "100px";
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
            }

}

function btn8(){
            var c = document.getElementById("cunt");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, cunt.width, cunt.height);

            switch(labNumber){
                case '1':

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
            }

}
        
function btn9(){
            var c = document.getElementById("cunt");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, cunt.width, cunt.height);

            switch(labNumber){
                case '1':

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
            }

}