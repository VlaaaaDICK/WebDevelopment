<!DOCTYPE html>
<html lang="ua">
<head>
    <meta charset="UTF-16">
    <title>Лабораторна №7</title>
    <style>
        table {
            width: 800px;
        }
        tr {
            text-align: center;
        }
    </style>
    <link rel="stylesheet" href="show.css">
</head>
<body>

<?php
$link = mysqli_connect("localhost", "root", "root","busschedule");
     

$query ="SELECT * FROM buses";
 
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
if($result)
{
    $rows = mysqli_num_rows($result);
    
    echo "<h1>Buses</h1><br><table><thead><tr><th> <span> Id </span> </th><th> <span> LICENCE_PLATE </span> </th><th> <span> MODEL </span> </th><th> <span> INT_OF_SEATS </span> </th><th> <span> INT_OF_STANDING_PLACES </span> </th></tr> </thead> <tbody>";
    for ($i = 0 ; $i < $rows ; ++$i)
    {
        $row = mysqli_fetch_row($result);
        echo "<tr>";
            for ($j = 0 ; $j < 5 ; ++$j) echo "<td>$row[$j]</td>";
        echo "</tr>";
    }
    echo "</tbody></table>  <br><br><br>";
     
    mysqli_free_result($result);
}



$query ="SELECT * FROM drivers";
 
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
if($result)
{
    $rows = mysqli_num_rows($result);
    
    echo "<h1>Drivers</h1><br><table><thead><tr><th> <span> Id </span> </th><th> <span> SURNAME </span> </th><th> <span> NAME </span> </th><th> <span> PATRONYMIC </span> </th><th> <span> DRIVING_EXPERIENCE </span> </th> <th> <span> SALARY </span> </th></tr> </thead> <tbody>";
    for ($i = 0 ; $i < $rows ; ++$i)
    {
        $row = mysqli_fetch_row($result);
        echo "<tr>";
            for ($j = 0 ; $j < 6 ; ++$j) echo "<td>$row[$j]</td>";
        echo "</tr>";
    }
    echo "</tbody></table>";
     
    mysqli_free_result($result);
}


 
mysqli_close($link);
?>



</body>
</html>