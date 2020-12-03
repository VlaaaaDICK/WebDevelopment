<!DOCTYPE html>
<html lang="ua">
<head>
    <meta charset="UTF-16">
    <meta http-equiv="refresh" content="0; url=show.php">  <!-- Переадресація на сторінку show.php-->

    <title>Лабораторна №7</title>
    <style>
        table {
            width: 800px;
        }
        tr {
            text-align: center;
        }
    </style>

</head>
<body>


<?php

// конектимось
$link = mysqli_connect("localhost", "root", "root","busschedule");

if ($link == false){
    print("Помилка: Неможливо підключитися до MySQL " . mysqli_connect_error());
}


//додаємо
$ID= filter_var(trim($_POST['ID']), 
FILTER_SANITIZE_STRING);
$LICENCE_PLATE = filter_var(trim($_POST['LICENCE_PLATE']), 
FILTER_SANITIZE_STRING);
$MODEL = filter_var(trim($_POST['MODEL']), 
FILTER_SANITIZE_STRING);
$INT_OF_SEATS = filter_var(trim($_POST['INT_OF_SEATS']), 
FILTER_SANITIZE_STRING);
$INT_OF_STANDING_PLACES = filter_var(trim($_POST['INT_OF_STANDING_PLACES']), 
FILTER_SANITIZE_STRING);

if($INT_OF_STANDING_PLACES.value.length == 0 || $INT_OF_STANDING_PLACES.value == null){
    $sql = ("INSERT INTO `buses` (`ID`, `LICENCE_PLATE`, `MODEL`) VALUES ('$ID', '$LICENCE_PLATE', '$MODEL')");
} else {
    $sql = ("INSERT INTO `buses` (`ID`, `LICENCE_PLATE`, `MODEL`, `INT_OF_SEATS`, `INT_OF_STANDING_PLACES`) VALUES ('$ID', '$LICENCE_PLATE', '$MODEL', '$INT_OF_SEATS', '$INT_OF_STANDING_PLACES')");
}


$result = mysqli_query($link, $sql);


$link->close();


?>



</body>
</html>