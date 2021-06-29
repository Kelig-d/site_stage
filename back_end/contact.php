<?php
print("coucou"."\n\r");
if (empty($_POST['nom']) || empty($_POST['telephone']) || empty($_POST['mail']) || empty($_POST['societe']) || empty($_POST['code_postal']) || empty($_POST['sujet']) || empty($_POST['type']) || empty($_POST['message'])){
	header('../Armor_productions/#/contact');
}
else{

if ($_POST)
	{

	// set response code - 200 OK

	$subject = $_POST['type']. ' - '.$_POST['sujet'];
	$to = "kelig.villalard@gmail.com";
	$from = $_POST['mail'];

	// data

	$msg = 	'Demande de la société :'.$_POST['societe']."\r\n".
			'Code postal : '.$_POST['code_postal']."\r\n".
			'Demande de la part de : '.$_POST['nom']."\r\n"
			.$_POST['message'];

	echo($msg);

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);
    header('Location:../#/contact');
	
	}
  else
	{

	// tell the user about error

	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}
}

?>