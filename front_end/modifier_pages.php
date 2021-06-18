<!DOCTYPE html>
<html lang="fr">
<?php
require('../back_end/db.php');
include('../back_end/infos_pages.php');
$title = "Armor productions - Modification de page";
include('../includes/header.php');
?>

<body class="bg-gray-100 font-sans leading-normal tracking-normal">
    <?php
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        foreach ($pages as $row) {
            if ($row['ID'] == $id) {
                $title = $row['TITLE'];
                $text1 = $row['TEXT1'];
                $text2 = $row['TEXT2'];
                $text3 = $row['TEXT3'];
                $photo1 = $row['PHOTOS1'];
                $photo2 = $row['PHOTOS2'];
                $photo3 = $row['PHOTOS3'];
                break;
            }
        }
    ?>
        <div class="grid mt-8  gap-8 grid-cols-1">
            <div class="flex flex-col ">
                <div class="bg-white shadow-md rounded-3xl p-5">
                    <a href="gestion_pages.php"><button class="focus:outline-none border border-black transition duration-500 ease-in-out transform hover:scale-110 bg-white hover:bg-black hover:text-white text-black mx-3 my-5 px-10 py-3 rounded-full">Retour</button></a>
                    <div class="flex flex-col sm:flex-row items-center">
                        <h2 class="font-semibold text-lg mr-auto">Modifier la page <?php echo $title; ?> </h2>
                        <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                    </div>
                    <div class="mt-5">
                        <form action="../back_end/modifier_pages.php" method="post" enctype="multipart/form-data">
                            <h3 class="font-semibold text-lg mr-auto my-3">Titre : <input class=" px-3 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg" name="title" value=<?php echo '"' . $title . '"'; ?>></h3>
                            <div class="form">
                                <div class=" my-5">
                                    <label class="font-semibold text-gray-600 py-2 px-5">Paragraphe 1 :</label>
                                </div>
                                <div class="md:flex flex-row md:space-x-4 w-full text-xs border">
                                    <div class="mb-3 space-y-2 w-full text-xs flex items-center">
                                        <textarea placeholder="Vous pouvez écrire votre texte" class="appearance-none block h-5/6 w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 ml-2" name="text1"><?php echo $text1; ?></textarea>
                                    </div>
                                    <div class="mb-3 space-y-2 w-full text-xs">
                                        <div class="md:space-y-2 mb-3">
                                            <div class="flex items-center py-6">
                                                <div class="w-40 h-40 mr-4 flex-none rounded-xl border overflow-hidden">
                                                    <img class="w-40 h-40 mr-4 object-cover" src=<?= '"../' . $photo1 . '"' ?> id="img1" alt="Avatar Upload">
                                                </div>
                                                <label class="cursor-pointer ">
                                                    <span class="focus:outline-none transition duration-500 ease-in-out transform hover:scale-110 text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">Browse</span>
                                                    <input type="file" class="hidden" name="photo1" accept="image/*" value="default" onchange="document.getElementById('img1').src = window.URL.createObjectURL(this.files[0]) ">
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class=" my-5">
                                    <label class="font-semibold text-gray-600 py-2 px-5">Paragraphe 2 :</label>
                                </div>
                                <div class="md:flex flex-row md:space-x-4 w-full text-xs border">
                                    <div class="mb-3 space-y-2 w-full text-xs flex items-center">
                                        <textarea placeholder="Vous pouvez écrire votre texte" class="appearance-none block h-5/6 w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 ml-2" name="text2"><?php echo $text2; ?></textarea>
                                    </div>
                                    <div class="mb-3 space-y-2 w-full text-xs">
                                        <div class="md:space-y-2 mb-3">
                                            <div class="flex items-center py-6">
                                                <div class="w-40 h-40 mr-4 flex-none rounded-xl border overflow-hidden">
                                                    <img class="w-40 h-40 mr-4 object-cover" src=<?= '"../' . $photo2 . '"' ?> id="img2" alt="Avatar Upload">
                                                </div>
                                                <label class="cursor-pointer ">
                                                    <span class="focus:outline-none transition duration-500 ease-in-out transform hover:scale-110 text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">Browse</span>
                                                    <input type="file" class="hidden" name="photo2" accept="image/*" value="default" onchange="document.getElementById('img2').src = window.URL.createObjectURL(this.files[0])">
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class=" my-5">
                                    <label class="font-semibold text-gray-600 py-2 px-5">Paragraphe 3 :</label>
                                </div>
                                <div class="md:flex flex-row md:space-x-4 w-full text-xs border">
                                    <div class="mb-3 space-y-2 w-full text-xs flex items-center">
                                        <textarea placeholder="Vous pouvez écrire votre texte" class="appearance-none block h-5/6 w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 ml-2" name="text3"><?php echo $text3; ?></textarea>
                                    </div>
                                    <div class="mb-3 space-y-2 w-full text-xs">
                                        <div class="md:space-y-2 mb-3">
                                            <div class="flex items-center py-6">
                                                <div class="w-40 h-40 mr-4 flex-none rounded-xl border overflow-hidden">
                                                    <img class="w-40 h-40 mr-4 object-cover" src=<?= '"../' . $photo3 . '"' ?> id="img3" alt="Avatar Upload">
                                                </div>
                                                <label class="cursor-pointer ">
                                                    <span class="focus:outline-none transition duration-500 ease-in-out transform hover:scale-110 text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">Browse</span>
                                                    <input type="file" class="hidden" name="photo3" accept="image/*" value="default" onchange="document.getElementById('img3').src = window.URL.createObjectURL(this.files[0]) ">
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input class="hidden" name="id" value=<?= $id ?>>
                                <input class="hidden" name="oldtitle" value=<?= $title ?>>
                                <input class="focus:outline-none transition duration-500 ease-in-out transform hover:scale-110 bg-green-500 hover:bg-green-600 text-white float-right my-3 mr-10 px-5 py-3 rounded-md cursor-pointer" name="ajouter" type="submit" value="Enregistrer">
                            </div>
                        </form>
                        <a class="focus:outline-none" href="gestion_pages.php"><button class="focus:outline-none focus:outline-none transition duration-500 ease-in-out transform hover:scale-110 bg-red-500 hover:bg-red-600 text-white float-right my-3 mr-10 px-7 py-3 rounded-md">Annuler</button></a>
                    </div>
                </div>
            </div>
        </div>
    <?php } else {
    ?>
        <div class="grid mt-8  gap-8 grid-cols-1">
            <div class="flex flex-col ">
                <div class="bg-white shadow-md rounded-3xl p-5">
                    <div class="flex items-center justify-center h-screen">
                        <h1 class="font-semibold mb-2 text-xl leading-tight sm:leading-normal">Aucune page sélectionnée</h1>
                        <button class="bg-blue-500 mx-5 text-white px-5 py-3 rounded-md"><a href="gestion_pages">Retour</a></button>
                    </div>
                </div>
            </div>
        </div>

    <?php }
    require('../includes/footer.php'); ?>
</body>

</html>