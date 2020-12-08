<!DOCTYPE html>
<html lang="ua">
<head>
    <meta charset="UTF-16">
    <title>Лабораторна №7</title>
    <link rel="stylesheet" href="main.css">

</head>
<body>

<div style="float:left">

<h1> Users </h1>

<form action="insert.php" method="post">
    <div class="group">
        <input type="text" id="surname" name="surname" placeholder="surname"><br>
        <input type="text" id="name" name="name" placeholder="name"><br>
        <input type="text" id="IPN" name="IPN" placeholder="IPN"><br>
        <input type="text" id="email" name="email" placeholder="email"><br>
        <input type="text" id="password" name="password" placeholder="password"><br>
        <input type="text" id="phone_number" name="phone_number" placeholder="phone_number"><br>
        <input type="text" id="birth" name="birth" placeholder="birth"><br>
        <button  class="button" type="submit">Insert</button>
    </div>
</form>

<form action="show.php" method="post">
    <div class="group">
        <button  class="button" type="submit">Show</button>
    </div>
</form>

<form name="form1" action="search.php" method="post">
    <div class="group">
        <input type="text" id="search" name="search" placeholder="SEARCH" required><br>
        <button class="button" type="submit" name="submit">Search</button>
    </div>
</form>

</div>

<div style="margin-left: 40px; float:left">

<h1> Admins </h1>

<form action="insert.php" method="post">
    <div class="group">
        <input type="text" id="id" name="id" placeholder="id"><br>
        <input type="text" id="surname" name="surname" placeholder="surname"><br>
        <input type="text" id="name" name="name" placeholder="name"><br>
        <input type="text" id="email" name="email" placeholder="email"><br>
        <input type="text" id="password" name="password" placeholder="password"><br>
        <input type="text" id="phone_number" name="phone_number" placeholder="phone_number"><br>
        <button  class="button" type="submit">Insert</button>
    </div>
</form>

<form action="show.php" method="post">
    <div class="group">
        <button  class="button" type="submit">Show</button>
    </div>
</form>

<form name="form1" action="search.php" method="post">
    <div class="group">
        <input type="text" id="search" name="search" placeholder="SEARCH" required><br>
        <button class="button" type="submit" name="submit">Search</button>
    </div>
</form>

</div>



<div style="margin-left: 40px; float:left">

<h1> Candidates </h1>

<form action="insert.php" method="post">
    <div class="group">
        <input type="text" id="id" name="id" placeholder="id"><br>
        <input type="text" id="surname" name="surname" placeholder="surname"><br>
        <input type="text" id="name" name="name" placeholder="name"><br>
        <input type="text" id="birth" name="birth" placeholder="birth"><br>
        <input type="text" id="slogan" name="slogan" placeholder="slogan"><br>
        <input type="text" id="biography" name="biography" placeholder="biography"><br>
        <button  class="button" type="submit">Insert</button>
    </div>
</form>

<form action="show.php" method="post">
    <div class="group">
        <button  class="button" type="submit">Show</button>
    </div>
</form>

<form name="form1" action="search.php" method="post">
    <div class="group">
        <input type="text" id="search" name="search" placeholder="SEARCH" required><br>
        <button class="button" type="submit" name="submit">Search</button>
    </div>
</form>

</div>
</body>
</html>