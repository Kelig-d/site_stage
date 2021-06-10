<!DOCTYPE html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Tailwind Starter Template - Minimal Blog: Tailwind Toolbox</title>
    <meta name="author" content="name" />
    <meta name="description" content="description here" />
    <meta name="keywords" content="keywords,here" />
    <link href="../assets/css/main.css" rel="stylesheet" />
    <!--Replace with your tailwind.css once created-->
</head>


<body class="bg-gray-100 font-sans leading-normal tracking-normal">
    <?php
    require('../back_end/db.php');
    ?>
    <div class="grid mt-8  gap-8 grid-cols-1">
        <div class="flex flex-col ">
            <div class="bg-white shadow-md rounded-3xl p-5">
                <div class="flex flex-col sm:flex-row items-center">
                    <h2 class="font-semibold text-lg mr-auto">Créer la page</h2>
                    <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>
                <div class="mt-5">
                    <div class="form">
                        <form action="../back_end/ajouter_pages.php" method="post" enctype="multipart/form-data">
                            <h3 class="font-semibold text-lg mr-auto my-3">Titre : <input class=" px-3 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg" name="title"></h3>
                            <label class="font-semibold text-gray-600 py-2 px-5">Paragraphe 1 :</label>
                            <div class="md:flex flex-row md:space-x-4 w-full text-xs border">
                                <div class="mb-3 space-y-2 w-full text-xs flex items-center">
                                    <textarea placeholder="Vous pouvez écrire votre texte" class="appearance-none block h-5/6 w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 ml-2" name="text1"></textarea>
                                </div>
                                <div class="mb-3 space-y-2 w-full text-xs">
                                    <div class="md:space-y-2 mb-3">
                                        <div class="flex items-center py-6">
                                            <div class="w-40 h-40 mr-4 flex-none rounded-xl border overflow-hidden">
                                                <img class="w-40 h-40 mr-4 object-cover" src="" id="img1" alt="Avatar Upload">
                                            </div>
                                            <label class="cursor-pointer ">
                                                <span class="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">Browse</span>
                                                <input type="file" class="hidden" name="photo1" accept="image/*" onchange="document.getElementById('img1').src = window.URL.createObjectURL(this.files[0])">
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label class="font-semibold text-gray-600 py-2 px-5">Paragraphe 2 :</label>
                            <div class="md:flex flex-row md:space-x-4 w-full text-xs border">
                                <div class="mb-3 space-y-2 w-full text-xs flex items-center">
                                    <textarea placeholder="Vous pouvez écrire votre texte" class="appearance-none block h-5/6 w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 ml-2" name="text2"></textarea>
                                </div>
                                <div class="mb-3 space-y-2 w-full text-xs">
                                    <div class="md:space-y-2 mb-3">
                                        <div class="flex items-center py-6">
                                            <div class="w-40 h-40 mr-4 flex-none rounded-xl border overflow-hidden">
                                                <img class="w-40 h-40 mr-4 object-cover" src="" id="img2" alt="Avatar Upload">
                                            </div>
                                            <label class="cursor-pointer ">
                                                <span class="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">Browse</span>
                                                <input type="file" class="hidden" name="photo2" accept="image/*" onchange="document.getElementById('img2').src = window.URL.createObjectURL(this.files[0])">
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label class="font-semibold text-gray-600 py-2 px-5">Paragraphe 3 :</label>
                            <div class="md:flex flex-row md:space-x-4 w-full text-xs border">
                                <div class="mb-3 space-y-2 w-full text-xs flex items-center">
                                    <textarea placeholder="Vous pouvez écrire votre texte" class="appearance-none block h-5/6 w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 ml-2" name="text3"></textarea>
                                </div>
                                <div class="mb-3 space-y-2 w-full text-xs">
                                    <div class="md:space-y-2 mb-3">
                                        <div class="flex items-center py-6">
                                            <div class="w-40 h-40 mr-4 flex-none rounded-xl border overflow-hidden">
                                                <img class="w-40 h-40 mr-4 object-cover" src="" id="img3" alt="Avatar Upload">
                                            </div>
                                            <label class="cursor-pointer ">
                                                <span class="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">Browse</span>
                                                <input type="file" class="hidden" name="photo3" accept="image/*" onchange="document.getElementById('img3').src = window.URL.createObjectURL(this.files[0])">
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input class="bg-green-500 text-white float-right my-3 mr-10 px-5 py-3 rounded-md cursor-pointer" name="ajouter" type="submit" value="Enregistrer">
                        </form>
                        <a href="gestion_pages.php"><button class="bg-red-600  text-white float-right my-3 mr-10 px-7 py-3 rounded-md">Annuler</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>