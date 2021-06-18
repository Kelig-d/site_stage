<?php

$title = $_POST['title'];
$text1 = $_POST['text1'];
$text2 = $_POST['text2'];
$text3 = $_POST['text3'];
if (empty($title)) {
    $title = "no_name";
}

if (isset($_POST['ajouter']) && $_POST['ajouter'] == 'Enregistrer') {
    $photos = array();
    $index=1;
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
                $folder = md5($title);
                $uploadFileDir = '../assets/images/' . $folder . '/';
                if (!is_dir($uploadFileDir)) {
                    mkdir($uploadFileDir);
                }
                $dest_path = $uploadFileDir . $newFileName;
                move_uploaded_file($fileTmpPath, $dest_path);
                $dest_path =  'assets/images/' . $folder . '/'.$newFileName;
                array_push($photos, $dest_path);
            }
        }
        $index+=1;
    }
    if (isset($photos[0])) {
        $photo1 = $photos[0];
    } else {
        $photo1 = "assets/images/default.png";
        
    }
    if (isset($photos[1])) {
        $photo2 = $photos[1];
    } else {
        $photo2 = "assets/images/default.png";
    }
    if (isset($photos[2])) {
        $photo3 = $photos[2];
    } else {
        $photo3 = "assets/images/default.png";
    }
}

    require('db.php');
    $req = $db_admin->prepare("SELECT  * FROM (
        SELECT t1.Id+1 AS Id
        FROM page t1
        WHERE NOT EXISTS(SELECT * FROM page t2 WHERE t2.Id = t1.Id + 1 )
        UNION 
        SELECT 1 AS Id
        WHERE NOT EXISTS (SELECT * FROM page t3 WHERE t3.Id = 1)) ot
    ORDER BY 1");
    $req->execute();
    $querry = $req->fetchAll(PDO::FETCH_ASSOC);
    $id=$querry[0]['Id'];
    $req = $db_admin->prepare("INSERT INTO page(ID,TITLE,TEXT1,TEXT2,TEXT3,PHOTOS1,PHOTOS2,PHOTOS3) VALUES(:id,:title,:text1,:text2,:text3,:photo1,:photo2,:photo3)");
    $req->bindParam(':id',$id,PDO::PARAM_INT);
    $req->bindParam(':title', $title, PDO::PARAM_STR);
    $req->bindParam(':text1', $text1, PDO::PARAM_STR);
    $req->bindParam(':text2', $text2, PDO::PARAM_STR);
    $req->bindParam(':text3', $text3, PDO::PARAM_STR);
    $req->bindParam(':photo1', $photo1, PDO::PARAM_STR);
    $req->bindParam(':photo2', $photo2, PDO::PARAM_STR);
    $req->bindParam(':photo3', $photo3, PDO::PARAM_STR);
    $req->execute();
    $req->closeCursor();

    header('Location:../front_end/gestion_pages.php');
