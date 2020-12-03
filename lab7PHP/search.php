<!--<!DOCTYPE html>
<html>
<head>
    <title>Search</title>
	<link rel="stylesheet" href="show.css">
</head>
<body>

<?php /*

$link = mysqli_connect("localhost", "root", "root","web_schema");

if ($conn->connect_error){
	die("Connection failed: ". $conn->connect_error);
}


$search= filter_var(trim($_POST['search']), 
FILTER_SANITIZE_STRING);


$sql = 'SELECT MODEL, LICENCE_PLATE FROM buses';
$result = mysqli_query($link, $sql);

$rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

$numb = mysqli_num_rows($result);



$arr = array(); 

$i = 0;
foreach ($rows as $row) {
	if($row['MODEL'] == $search){
		//print("MODEL: " . $row['MODEL'] . "; LICENCE_PLATE: " . $row['LICENCE_PLATE'] . "<br>");
		$arr[$i][0] = $row['LICENCE_PLATE'];
		$arr[$i][1] = $row['MODEL'];
		$i += 1;
	}
}

if($result)
{
    $numb = mysqli_num_rows($result);
    $i = 0;
    echo "<h1> Повний збіг за запитом: $search</h1><br><table><thead><tr><th> <span> LICENCE_PLATE </span> </th><th> <span> MODEL </span> </th>  </tr> </thead> <tbody>";
    foreach ($arr as $a){
			echo "<tr>";
			echo "<td>$a[0]</td>";
			echo "<td>$a[1]</td>";
			echo "</tr>";
    }
    echo "</tbody></table>  <br><br><br>";
     
    //mysqli_free_result($result);
}



$i = 0;
foreach ($rows as $row) {
	if(preg_match("/$search/i", $row['MODEL'])){
		//print("MODEL: " . $row['MODEL'] . "; LICENCE_PLATE: " . $row['LICENCE_PLATE'] . "<br>");
		$arr[$i][0] = $row['LICENCE_PLATE'];
		$arr[$i][1] = $row['MODEL'];
		$i += 1;
	}
}


if($result)
{
    //$numb = mysqli_num_rows($result);
    $i = 0;
    echo "<h1> Частковий збіг за запитом: $search</h1><br><table><thead><tr><th> <span> LICENCE_PLATE </span> </th><th> <span> MODEL </span> </th>  </tr> </thead> <tbody>";
    foreach ($arr as $a){
			echo "<tr>";
			echo "<td>$a[0]</td>";
			echo "<td>$a[1]</td>";
			echo "</tr>";
    }
    echo "</tbody></table>  <br><br><br>";
     
    mysqli_free_result($result);
}



*/?>

</body>-->