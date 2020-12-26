<?php

include("config.php");
session_start();

if($_SERVER["REQUEST_METHOD"] == "POST") {
   // username and password sent from form 
   
   $myEmail = mysqli_real_escape_string($db,$_POST['Email']);
   $myPassword = mysqli_real_escape_string($db,$_POST['Password']); 
   
   $sql = "SELECT id FROM users WHERE email = '$myEmail' AND password = '$myPassword'";
   $result = mysqli_query($db,$sql);
   $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
   $active = $row['active'];
   
   $count = mysqli_num_rows($result);
   
   // If result matched $myusername and $mypassword, table row must be 1 row
 
   if($count == 1) {
      //session_register("myEmail");
      $_SESSION['login_user'] = $myEmail;
      $_SESSION['pass_user'] = $myPassword;

      header("location: ../../../index.php");
   }else {
      $error = "Your Email or Password is invalid";
   }
}

?>



<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Lab 9</title>
        <link rel="stylesheet" type="text/css" href="./vendors/bootstrap-3.4.1/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="./vendors/font-awesome-4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="./css/examples.css" />
    </head>
    
    <body>

        
        <div class="container">
            <div class="row">
                <div class="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">Registration</h3>
                        </div>
                        <div class="panel-body">
                            
                            <form class="form-horizontal" action="." id="form1">
                                
                                <div class="form-group">
                                    <div class="col-lg-12"><label class="control-label" for="username">Username</label></div>
                                    <div class="col-lg-12">
                                        <input type="text" name="username" id="username" class="form-control really-simple required"
                                                data-required-message="Your username must be not blank"
                                                data-really-simple-message="Please enter a valid username, it should contain only letters and numbers" />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-lg-12"><label class="control-label" for="email">Email</label></div>
                                    <div class="col-lg-12">
                                        <input id="Email" type="text" name="email" id="email" class="form-control email required"
                                                data-required-message="Your email must be not blank"
                                                data-email-message="Your email must be like someone@somewhere.com" />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-lg-12"><label class="control-label" for="password">Password</label></div>
                                    <div class="col-lg-12">
                                        <input type="password" name="password" id="password" class="form-control password required"
                                                data-required-message="Your password must be not blank"
                                                data-password-message="Please enter a valid password, it should contain at least 6 characters with at least 1 number and special character" />
                                    </div>
                                </div>
                                
                                <hr />
                                
                                <div class="form-action">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>         

        <script>

        function writeInXml(){

            var doc = document.implementation.createDocument("", "", null);
            var usersElem = doc.createElement("users");

            var userElem = doc.createElement("user");
            userElem.setAttribute("username", document.getElementById("username").value);
            userElem.setAttribute("email",  document.getElementById("email").value);
            userElem.setAttribute("password",  document.getElementById("password").value);
            
            usersElem.appendChild(userElem);
            doc.appendChild(usersElem);

             


            var node = doc.createElement("user");
            var elements = xmlDoc.getElementsByTagName("users");
            elements[0].appendChild(node);
        }


        </script>

        
        <script type="text/javascript" src="./vendors/jquery-3.3.1/jquery-3.3.1.min.js"></script>
        <script type="text/javascript" src="./vendors/bootstrap-3.4.1/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="./vendors/moment-2.24.0/moment-with-locales.min.js"></script>
        <script type="text/javascript" src="../dist/jquery.niceform.js"></script>
        <script type="text/javascript" src="./js/examples.js"></script>
    </body>
</html>
