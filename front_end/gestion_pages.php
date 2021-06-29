<!DOCTYPE html>
<html lang="fr">
<?php
include('../back_end/infos_pages.php');
$title = "Armor productions - Gestion des pages";
include('../includes/header.php');
include('../middleware/admin.php');
?>

<body>
    <div id="liste_pages">
        <?= $infos; ?>
    </div>
    <script src="../assets/js/admin.js"></script>
    <?php include ('../includes/footer.php'); ?>
</html>