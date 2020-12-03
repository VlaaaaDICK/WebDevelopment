<!DOCTYPE html>
<html lang="ua">
<head>
    <meta charset="UTF-16">
    <title>Лабораторна №7</title>
    <link rel="stylesheet" href="main.css">

</head>
<body>

<div style="float:left">

<h1> Buses </h1>

<form action="insert.php" method="post">
    <div class="group">
        <input type="text" id="ID" name="ID" placeholder="ID"><br>
        <input type="text" id="LICENCE_PLATE" name="LICENCE_PLATE" placeholder="LICENCE_PLATE"><br>
        <input type="text" id="MODEL" name="MODEL" placeholder="MODEL"><br>
        <input type="text" id="INT_OF_SEATS" name="INT_OF_SEATS" placeholder="INT_OF_SEATS"><br>
        <input type="text" id="INT_OF_STANDING_PLACES" name="INT_OF_STANDING_PLACES" placeholder="INT_OF_STANDING_PLACES"><br>
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

<h1> Drivers </h1>

<form action="insert.php" method="post">
    <div class="group">
        <input type="text" id="ID" name="ID" placeholder="ID"><br>
        <input type="text" id="SURNAME" name="SURNAME" placeholder="SURNAME"><br>
        <input type="text" id="NAME" name="NAME" placeholder="NAME"><br>
        <input type="text" id="PATRONYMIC" name="PATRONYMIC" placeholder="PATRONYMIC"><br>
        <input type="text" id="DRIVING_EXPERIENCE" name="DRIVING_EXPERIENCE" placeholder="DRIVING_EXPERIENCE"><br>
        <input type="text" id="SALARY" name="SALARY" placeholder="SALARY"><br>
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

<h1> Passengers </h1>

<form action="insert.php" method="post">
    <div class="group">
    <input type="text" id="ID" name="ID" placeholder="ID"><br>
        <input type="text" id="SURNAME" name="SURNAME" placeholder="SURNAME"><br>
        <input type="text" id="NAME" name="NAME" placeholder="NAME"><br>
        <input type="text" id="PATRONYMIC" name="PATRONYMIC" placeholder="PATRONYMIC"><br>
        <input type="text" id="PHONE_INT" name="PHONE_INT" placeholder="PHONE_INT"><br>
        <input type="text" id="EMAIL" name="EMAIL" placeholder="EMAIL"><br>
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

<h1> Routes </h1>

<form action="insert.php" method="post">
    <div class="group">
        <input type="text" id="ID" name="ID" placeholder="ID"><br>
        <input type="text" id="ROUTE_INT" name="ROUTE_INT" placeholder="ROUTE_INT"><br>
        <input type="text" id="ROUT_LENGTH" name="ROUT_LENGTH" placeholder="ROUTE_LENGTH"><br>
        <input type="text" id="STOPS_INT" name="STOPS_INT" placeholder="STOPS_INT"><br>
        <br><br><br><br><br><br>
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
<br>
</div>





<div style="float:left">

<h1> Shifts </h1>

<form action="insert.php" method="post">
    <div class="group">
        <input type="text" id="ID" name="ID" placeholder="ID"><br>
        <input type="text" id="" name="" placeholder=""><br>
        <input type="text" id="" name="" placeholder=""><br>
        <input type="text" id="" name="" placeholder=""><br>
        <input type="text" id="" name="" placeholder=""><br>
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

<h1> Stops </h1>

<form action="insert.php" method="post">
    <div class="group">
        <input type="text" id="ID" name="ID" placeholder="ID"><br>
        <input type="text" id="" name="" placeholder=""><br>
        <input type="text" id="" name="" placeholder=""><br>
        <input type="text" id="" name="" placeholder=""><br>
        <input type="text" id="" name="" placeholder=""><br>
        <button class="button" type="submit">Insert</button>
    </div>
</form>

<form action="show.php" method="post">
    <div class="group">
        <button class="button" type="submit">Show</button>
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

<h1> Tickets </h1>

<form action="insert.php" method="post">
    <div class="group">
        <input type="text" id="ID" name="ID" placeholder="ID"><br>
        <input type="text" id="" name="" placeholder=""><br>
        <input type="text" id="" name="" placeholder=""><br>
        <input type="text" id="" name="" placeholder=""><br>
        <input type="text" id="" name="" placeholder=""><br>
        <button class="button" type="submit">Insert</button>
    </div>
</form>

<form action="show.php" method="post">
    <div class="group">
        <button class="button" type="submit">Show</button>
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