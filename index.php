<?php
   include('login/session.php');
?>

<!DOCTYPE html>
<html lang="ua">
<header>
    <meta charset="UTF-16" name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="indexCSS.css">
    <script src="lab5/jquery-3.5.1.min.js"></script>
    <script src="lab5/jqery.js"></script>
    <title>Головна сторінка</title>
    <br><br>

    <style>
        html { overflow-x: hidden; }
    </style>

    <?php
        if ($_SESSION['surname_user'] == null || $_SESSION['surname_user'] == ''){
            echo '<style>#signout { display:none;} #result { display:none;} </style>';
        }
    ?>

    <script>
        if(sessionStorage.getItem('surname_user') != ''){
            document.getElementById('signout').style.display = none;
        }
    </script>



    <!-- Login -->
    
        <button id="result" class="btn-info" style="float:right; width: 400px"><?php echo $_SESSION['surname_user']; echo ' '; echo $_SESSION['name_user']; ?> ! </button> <br><br><br><br>
        <button id="signout" class="btn-info" onclick='location.href="login/logout.php"' style="float:right; width: 400px"> Вийти </button>
    <br><br><br>

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
    <ul id="ddmenu" style="width: 220px; height: 150px; float: left;">
        <li>Деякі посилання:
            <ol>
                <li><a href="candidatesPage/candidates.html">Перелік Кандидатів</a></li>
                <li><a href="index.html">Щось ще</a></li>
                <li><a href="index.html">Щось ще але вже інше</a></li>
                <li><a href="index.html">Щось зовсім нове</a></li>
            </ol>
        </li>
    </ul>
    <form action="langs_sw.php" method="get">
        <select name="lang">
            <option value="en"<?php if( $_COOKIE["lang"] == "en" ) { echo " selected"; } ?>>English</option>
            <option value="ru"<?php if( $_COOKIE["lang"] == "ru" ) { echo " selected"; } ?>>Russian</option>
            <option value="ua"<?php if( $_COOKIE["lang"] == "ua" ) { echo " selected"; } ?>>Ukrainian</option>
        </select>
        <input class="btn-info" type="submit" value="Select Language">
    </form>

    <p>Language: <?php
        if( isset( $_COOKIE["lang"] ) ) {
            if ($_COOKIE["lang"]=="en"){
                echo ("English<img src=\"flags/ukflag.png\" width='20px'>");
            }
            elseif ($_COOKIE["lang"]=="ua"){
                echo ("Українська<img src=\"flags/uaflag.jpg\" width='20px'>");
            }
            elseif ($_COOKIE["lang"]=="ru"){
                echo ("Русский<img src=\"flags/GayFlag.png\" width='20px'>");
            }
        } else
        { echo "<em>not set</em>"; } ?></p>

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
<br>

</body>
<footer style="page: revert">
    <hr>
    <p style="text-align: center;"
       onclick="alert('А ти голосував?');">
        &copy; Copyright 2020
    </p>
</footer>



</html>