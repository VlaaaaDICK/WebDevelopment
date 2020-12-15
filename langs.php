<form action="langs_sw.php" method="get">
    <select name="lang">
        <option value="en"<?php if( $_COOKIE["lang"] == "en" ) { echo " selected"; } ?>>English</option>
        <option value="ru"<?php if( $_COOKIE["lang"] == "ru" ) { echo " selected"; } ?>>Russian</option>
        <option value="ua"<?php if( $_COOKIE["lang"] == "ua" ) { echo " selected"; } ?>>Ukrainian</option>
    </select>
    <input type="submit" value="Select Language">
</form>

<p>Language: <?php
    if( isset( $_COOKIE["lang"] ) ) {
        if ($_COOKIE["lang"]=="en"){
            echo ("English");
        }
        elseif ($_COOKIE["lang"]=="ua"){
            echo ("Українська");
        }
        elseif ($_COOKIE["lang"]=="ru"){
            echo ("Русский");
        }
    } else
        { echo "<em>not set</em>"; } ?></p>