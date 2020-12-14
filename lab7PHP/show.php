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
$link = mysqli_connect("localhost", "root", "root","web_schema");
     

$query ="SELECT * FROM users";
 
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
if($result)
{
    $rows = mysqli_num_rows($result);
    
    echo "<h1>Users</h1><br><table><thead><tr><th> <span> Id </span> </th><th> <span> Surname </span> </th><th> <span> Name </span> </th><th> <span> IPN </span> </th><th> <span> Email </span> </th><th> <span> Password </span> </th><th> <span> Phone number </span> </th><th> <span> Date of birth </span> </th></tr> </thead> <tbody>";
    for ($i = 0 ; $i < $rows ; ++$i)
    {
        $row = mysqli_fetch_row($result);
        echo "<tr>";
            for ($j = 0 ; $j < 8 ; ++$j) echo "<td>$row[$j]</td>";
        echo "</tr>";
    }
    echo "</tbody></table>  <br><br><br>";
     
    mysqli_free_result($result);
}


mysqli_close($link);
?>



</body>
</html>