<?php
include ('db.php');
/*Récupération des infos des pages*/
$req = $db_admin->prepare("SELECT * from page");
$req->execute();
$pages = $req->fetchAll(PDO::FETCH_ASSOC);
$req->closeCursor();

/*mise en format json pour react*/
$infos = $json = json_encode($pages, JSON_UNESCAPED_UNICODE);

?>