<?php
if (!isset($_SESSION['UserData']['Username']) && $_SESSION['USerData']['Username']!="598uB43E^^JMbTG8") { 
    header('Location: ../admin.php');
    exit();
}
