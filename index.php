<!DOCTYPE html>
<html lang="ua">
<header>
    <meta charset="UTF-16" name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="indexCSS.css">
    <script src="lab5/jquery-3.5.1.min.js"></script>
    <script src="lab5/jqery.js"></script>
    <title>Головна сторінка</title>
    <br><br>
    <!-- Login -->


    <span style="padding: 0px 10px;">&nbsp;</span>
    <br><br><br><br><br><br><br>

    </div>
    <div class="form-group">
        <button class="btn-info" onclick='location.href="index.php"'>Про сайт</button>

        <button class="btn-info" onclick="alert('Спочатку авторизуйтеся.');">Проголосувати</button>

        <button class="btn-info" onclick='location.href="login/login.php"'>Авторизуватися</button>

        <button class="btn-info" onclick='location.href="lab1.php"'>Help</button>

        <button class="btn-info" onclick='location.href="reports.php"'>Звіти</a></button>
    </div>
</header>

<body>
<div id="content">
    <ul id="ddmenu">
        <li>Деякі посилання:
            <ol>
                <li><a href="candidatesPage/candidates.html">Перелік Кандидатів</a></li>
                <li><a href="index.html">Щось ще</a></li>
                <li><a href="index.html">Щось ще але вже інше</a></li>
                <li><a href="index.html">Щось зовсім нове</a></li>
            </ol>
        </li>
    </ul>
    <div id="information">
        <table class="table_blur">
            <tr>
                <th>Фото кандидата</th>
                <th>Інформація про кандидата</th>
            </tr>
            <tr class="text">
                <td><img src="candidatePhoto/IgorLink.jpg" width="225" height="225"></td>
                <td><table>
                    <tr>Ігор Токач</tr><br>
                    <tr>03.07.93</tr><br>
                    <tr>"Я - найчесніша, непідкупна, найоб'єктивніша, найінтелектуальніша людина в світі."</tr>
                </table></td>
            </tr>
            <tr>
                <td><img src="candidatePhoto/Slidan.jpg" width="188" height="268"></td>
                <td><table>
                    <tr>Віктор Слідовський</tr><br>
                    <tr>25.12.1996</tr><br>
                    <tr>"Watashi wa kitanai baishinpu desu"</tr>
                </table></td>
            </tr>
            <tr>
                <td><img src="candidatePhoto/OlegBochrov.jpg" width="240" height="200"></td>
                <td><table>
                    <tr>Олег Бочаров</tr><br>
                    <tr>30.12.92</tr><br>
                    <tr>"Ладно смазан, молодой. Хоть какой пойдёшь со мной!"</tr>
                </table></td>
            </tr>
        </table>
    </div>

</div>
</body>

<footer style="page: revert">
    <hr>
    <p style="text-align: center;"
       onclick="alert('А ти голосував?');">
        &copy; Copyright 2020
    </p>
</footer>
</html>