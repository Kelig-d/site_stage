<!DOCTYPE html>
<html lang="fr">
<?php
require('../back_end/db.php');
include('../back_end/infos_pages.php');
$title = "Armor productions - Gestion des pages";
include('../includes/header.php');
?>

<body>
    <div id="liste_pages">
        <?= $infos; ?>
    </div>
    <script src="../assets/js/admin.js"></script>
   <?php require('../includes/footer.php'); ?>

</html>