<?php
   include('config.php');
   session_start();
   
   $email = $_SESSION['login_user'];
   $password = $_SESSION['pass_user'];

   $query ="SELECT * FROM users WHERE email='".$email."' AND password='".$password."' limit 1";

   $result = mysqli_query($db, $query) or die("Ошибка " . mysqli_error($db)); 
   if($result)
   {
       $rows = mysqli_num_rows($result);
       $row = mysqli_fetch_row($result);
       $_SESSION['surname_user'] = $row[1];
       $_SESSION['name_user'] = $row[2];
   }


   /*    Перенаправляє гостя на сторінку авторизації одразу (гість не має доступу до головної сторінки)
   if(!isset($_SESSION['login_user'])){
      header("location: login/login.php");
      die();
   }
   */
?>