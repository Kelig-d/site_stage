<?php

require('../back_end/db.php');
$id = $_GET['id'];
$req = $db_admin->prepare('DELETE from page where  ID=:id');
$req->bindParam(':id',$id,PDO::PARAM_INT);
$req->execute();
$req->closeCursor();
header('Location:../front_end/gestion_pages.php');