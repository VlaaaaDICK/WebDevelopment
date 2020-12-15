<?php
$lang = $_COOKIE['lang'];
if( isset( $_GET["lang"] ) ) {
    $lang = $_GET["lang"];
    setcookie ( 'lang', $lang, time() + 60*60*24*30*6);
    header( "Location: /index.php" );
}
echo ($_COOKIE['lang'])
?>


