<?php

require('../back_end/db.php');

$id = $_GET['id'];
$title = $_GET['title'];
$req = $db_admin->prepare('DELETE from page where  ID=:id');
$req->bindParam(':id',$id,PDO::PARAM_INT);
$req->execute();
$req->closeCursor();
deleteDirectory('../assets/images/'.md5($title));


function deleteDirectory($dir) {
    if (!file_exists($dir)) {
        return true;
    }

    if (!is_dir($dir)) {
        return unlink($dir);
    }

    foreach (scandir($dir) as $item) {
        if ($item == '.' || $item == '..') {
            continue;
        }

        if (!deleteDirectory($dir . DIRECTORY_SEPARATOR . $item)) {
            return false;
        }

    }

    return rmdir($dir);
}

header('Location:../front_end/gestion_pages.php');