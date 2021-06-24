<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Armor productions - admin</title>
    <link href="assets/css/main.css" rel="stylesheet" />
</head>


<body>
<?php include('back_end/login.php'); ?>
    <section class="w-full top-0">
        <div class="flex items-center justify-center h-screen absolute top-0 w-full h-full bg-gray-900"></div>
        <a href="."><button class="focus:outline-none border border-black transition duration-500 ease-in-out transform hover:scale-110 bg-white hover:bg-black hover:text-white text-black mx-3 my-5 px-10 py-3 rounded-full">Retour</button></a>
        <div class="flex items-center justify-center h-full">
            <div class="w-full lg:w-4/12 px-4 pt-32">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                    <div class="flex-auto px-4 lg:px-10 py-5">
                    <?php
                        if(isset($msg)){
                            echo $msg;
                        }
                    ?>
                        <form method="post" name="login">
                            <div class="relative w-full mb-3">
                                <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Nom d'utilisateur</label>
                                <input type="text" maxlength="20" class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Nom d'utilisateur" name="username" style="transition: all 0.15s ease 0s;">
                            </div>
                            <div class="relative w-full mb-3">
                                <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Mot de passe</label>
                                <input type="password" maxlength="20" class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Mot de passe" name="password" style="transition: all 0.15s ease 0s;">
                            </div>
                            <div class="text-center mt-6">
                                <button class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" type="submit" name="Submit" style="transition: all 0.15s ease 0s;">Se connecter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <footer class="absolute w-full bottom-0 bg-gray-900 pb-6">
            <div class="container mx-auto px-4">
                <hr class="mb-6 border-b-1 border-gray-700">
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4">
                        <div class="text-sm text-white font-semibold py-1">Zone réservée aux administrateurs</div>
                    </div>
                </div>
            </div>
        </footer>
    </section>
</body>


</html>