<?php
session_start();
if (isset($_POST['Submit'])) {
    $logins = array('admin' => '598uB43E^^JMbTG8');

    $user = isset($_POST['username']) ? $_POST['username'] : '';
    $pass = isset($_POST['password']) ? $_POST['password'] : '';
    if (isset($logins[$user]) && $logins[$user] == $pass) {
        /* Success: Set session variables and redirect to Protected page  */
        $_SESSION['UserData']['Username'] = $logins[$user];
        header("location:front_end/gestion_pages.php");
        exit;
    } else {
        /*Unsuccessful attempt: Set error message */
        $msg = "<span class='text-red-500'>Nom d'utilisateur ou mot de passe invalide</span>";

    }
}