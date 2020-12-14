<!DOCTYPE html>
<html lang="ua">
<head>
    <meta charset="UTF-16">
    <meta http-equiv="refresh" content="0; url=../index.php">  <!-- Переадресація на сторінку show.php-->
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
$link = mysqli_connect("localhost", "root", "root","web_schema");

if ($link == false){
    print("Помилка: Неможливо підключитися до MySQL " . mysqli_connect_error());
}

//додаємо
$id = filter_var(trim($_POST['id']),
FILTER_SANITIZE_STRING);
$surname = filter_var(trim($_POST['surname']),
FILTER_SANITIZE_STRING);
$name = filter_var(trim($_POST['name']),
FILTER_SANITIZE_STRING);
$IPN = filter_var(trim($_POST['IPN']),
FILTER_SANITIZE_STRING);
$email = filter_var(trim($_POST['email']),
FILTER_SANITIZE_STRING);
$password = filter_var(trim($_POST['password']),
FILTER_SANITIZE_STRING);
$phone_number = filter_var(trim($_POST['phone_number']),
FILTER_SANITIZE_STRING);
$birth = filter_var(trim($_POST['birth']),
FILTER_SANITIZE_STRING);


if($phone_number.value.length == 0 || $phone_number.value == null){
    $sql = ("INSERT INTO `users` (`id`, `surname`, `name`, `IPN`, `email`, `password`, `phone_number`, `birth`) VALUES (NULL, '$surname', '$name', '$IPN', '$email', '$password', NULL, NULL)");
} else {
    $sql = ("INSERT INTO `users` (`id`, `surname`, `name`, `IPN`, `email`, `password`, `phone_number`, `birth`) VALUES (NULL, '$surname', '$name', '$IPN', '$email', '$password', '$phone_number', '$birth')");
}

$result = mysqli_query($link, $sql);

$link->close();

?>

</body>
</html>