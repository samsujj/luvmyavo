<?php
$to      = 'online@luvmyavo.com';
$subject = 'New contact input from luvmyavo.com';
$message = '<h2>'.$_POST['subject'].'</h2>';
$message .= '<p>'.$_POST['message'].'</p>';

$headers  = "From: ".$_POST['name1']." < ".$_POST['mail']." >\n";
$headers  = "Reply-To: ".$_POST['mail']." \n";
//$headers .= "Cc: Samsuj < samsujj@gmail.com >\n";
$headers .= "X-Sender: ".$_POST['name1']." < ".$_POST['mail']." >\n";
$headers .= 'X-Mailer: PHP/' . phpversion();
$headers .= "X-Priority: 1\n"; // Urgent message!
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=iso-8859-1\n";

$x = mail($to, $subject, $message, $headers);

?>