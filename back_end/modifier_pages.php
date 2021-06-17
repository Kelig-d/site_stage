<?php
$title = $_POST['oldtitle'];
$id=$_POST['id'];
$text1 = $_POST['text1'];
$text2 = $_POST['text2'];
$text3 = $_POST['text3'];

require('../back_end/db.php');

if (isset($_POST['ajouter']) && $_POST['ajouter'] == 'Enregistrer') {
    $photos = array();
    $index=1;
    $folder = md5($title);
    foreach ($_FILES as $file) {
        if (isset($file['name']) && $file['error'] === UPLOAD_ERR_OK) {
            $fileTmpPath = $file['tmp_name'];
            $fileName = $file['name'];
            $fileSize = $file['size'];
            $fileType = $file['type'];
            $fileNameCmps = explode(".", $fileName);
            $fileExtension = strtolower(end($fileNameCmps));
            $newFileName =  'photo'.$index.'.' . $fileExtension;
            $allowedfileExtensions = array('jpg', 'gif', 'png', 'zip', 'txt', 'xls', 'doc');
            if (in_array($fileExtension, $allowedfileExtensions)) {
                $uploadFileDir = '../assets/images/' . $folder . '/';
                if (!is_dir($uploadFileDir)) {
                    mkdir($uploadFileDir);
                }
                $dest_path = $uploadFileDir . $newFileName;
                move_uploaded_file($fileTmpPath, $dest_path);
                array_push($photos, $newFileName);
        }
        }
        else{
            include('infos_pages.php');
            foreach($pages as $row){
                if($row['PHOTOS'.$index]=='../assets/images/default.png'){
                   $photos[$index-1] = null;
                }
                else{
                    $photos[$index-1] = 'photo'.$index.'.'.substr($row['PHOTOS'.$index],-3);
                }
            }
        }
        $index+=1;
    }
    if(is_dir("../assets/images/".$folder."/")){
    $scan = scandir("../assets/images/".$folder."/");
   
    foreach($scan as $file){
        if($photos[0]==$file){
            $photo1 = 'assets/images/'.$folder.'/'.$photos[0];
            break;
        }
        $photo1 = 'assets/images/default.png';
    }

    foreach($scan as $file){
        if($photos[1]==$file){
            $photo2 = 'assets/images/'.$folder.'/'.$photos[1];
            break;
        }
        $photo2 = 'assets/images/default.png';

    }
    foreach($scan as $file){
        if($photos[2]==$file){
            $photo3 = 'assets/images/'.$folder.'/'.$photos[2];
            break;
        }
        $photo3 = 'assets/images/default.png';
    }
}
else{
    $photo1 = 'assets/images/default.png';
    $photo2 = 'assets/images/default.png';
    $photo3 = 'assets/images/default.png';
}
}

if($title != $_POST['title']){
    rename('/assets/images/'.md5($title).'/','/assets/images/'.md5($_POST['title']).'/');
    $title = $_POST['title'];
}

$req = $db_admin->prepare("UPDATE page SET TITLE = :title, TEXT1 = :text1, TEXT2 = :text2, TEXT3 = :text3, PHOTOS1 = :photo1,PHOTOS2 = :photo2,PHOTOS3 = :photo3 WHERE ID=:id");
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