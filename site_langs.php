
<!--/*
if ( !isset( $_COOKIE['lang'] )) {
    $_COOKIE['lang'] = $_GET['lang'];
}
if ( $_COOKIE['lang'] == "en") {
    echo ("English");
} elseif ( $_COOKIE['lang'] == "jp"){
    echo ("Japanese");
} elseif ( $_COOKIE['lang'] == "ua"){
    echo ("Ukrainian");
}
setcookie('lang', $_COOKIE['lang'], time() + 60*60*24*30*6);
*/-->
<html>
<head>

</head>
<body>
<!--<a href="site_langs.php?lang=en">english</a>
<a href="site_langs.php?lang=ua">ukrainian</a>-->
<ul>
    <li class="active"><a href="/<?php echo basename($_SERVER['PHP_SELF'])?>?lang=en">ENGLISH</a></li>
    <li><a href="/<?php echo basename($_SERVER['PHP_SELF'])?>?lang=ru">РУССКИЙ</a></li>
</ul>
</body>
<?php
if ((isset($_GET['lang']) && $_GET['lang'] != "")) {
    setcookie("langpref", "".$_GET['lang']  ."", time()+(60*60*24*30), "/", "", 0);
}
?>
<?php
if (isset($_COOKIE['langpref'])) {
    if (strpos($_SERVER['PHP_SELF'],$_COOKIE['langpref']) === false) {
        header("location: /" . $_COOKIE['langpref'] ."/". basename($_SERVER['PHP_SELF']));
    }
}
?>
</html>
