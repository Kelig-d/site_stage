<?php
$title=$_POST['title'];
$id=$_POST['id'];
$text1 = $_POST['text1'];
$text2 = $_POST['text2'];
$text3 = $_POST['text3'];
$photo1 = $_POST['photo1'];
$photo2 = $_POST['photo2'];
$photo3 = $_POST['photo3'];
if(empty($photo1)){
    $photo1 = "../assets/images/default.png";
}
if(empty($photo2)){
    $photo2 = "../assets/images/default.png";
}
if(empty($photo3)){
    $photo3 = "../assets/images/default.png";
}

require('db.php');

$req = $db_admin->prepare("UPDATE page SET TITLE = :title, TEXT = :text1, TEXT2 = :text2, TEXT3 = :text3, PHOTOS = :photo1,PHOTOS2 = :photo2,PHOTOS3 = :photo3 WHERE ID=:id");
$req->bindParam(":title",$title,PDO::PARAM_STR);
$req->bindParam(":text1",$text1,PDO::PARAM_STR);
$req->bindParam(":text2",$text2,PDO::PARAM_STR);
$req->bindParam(":text3",$text3,PDO::PARAM_STR);
$req->bindParam(":photo1",$photo1,PDO::PARAM_STR);
$req->bindParam(":photo2",$photo2,PDO::PARAM_STR);
$req->bindParam(":photo3",$photo3,PDO::PARAM_STR);
$req->bindParam(":id",$id,PDO::PARAM_INT);
$req->execute();
$req->closeCursor();

header('Location:../front_end/gestion_pages.php');
?>