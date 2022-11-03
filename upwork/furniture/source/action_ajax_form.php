<?php 
	
	if (isset($_POST["form__name"]) && isset($_POST["form__phone"]) && isset($_POST["form__email"])) { 	

	    $name = $_POST["form__name"];
	    $phone = $_POST["form__phone"];
	    $email = $_POST["form__email"];
    	$pickup_address = $_POST["form__pickup_address"];
    	$pickup_address_access = $_POST["form__pickup_address_access"];
    	$install_address = $_POST["form__install_address"];
    	$install_address_access = $_POST["form__install_address_access"];
    	$project_time = $_POST["form__project_time"];
    	$project_date = $_POST["form__project_date"];
    	$receving = $_POST["receving"];
    	$certificate = $_POST["certificate"];

    	$description = $_POST["form__description"];    	

    	$message = "<div style='width: 550px; font-family: Arial, sans-serif; border-top: 1px dashed #aaaaaa;'><div style='display: flex; flex-wrap: nowrap; width: 100%; border-bottom: 1px dashed #aaaaaa;'><p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Full Name</p><p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $name . "</p></div><div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'><p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Phone</p><p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $phone . "</p></div><div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'><p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Email</p><p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $email . "</p></div><div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'><p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Pickup Address</p><p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $pickup_address . "</p></div><div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'><p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Pickup Address Access</p><p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $pickup_address_access . "</p></div><div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'><p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Install Address</p><p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $install_address . "</p></div><div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'><p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Install Address Access</p><p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $install_address_access . "</p></div><div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'><p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Project Time</p><p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $project_time . "</p></div><div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'><p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Project Date</p>
			<p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $project_date . "</p></div><div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'><p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Receiving Needed</p><p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $receving . "</p></div><div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'><p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Certificate of Insurance Needed</p><p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $certificate . "</p></div><div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'><p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Item List and Description</p><p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $description . "</p></div><div style='display: flex; width: 100%; flex-wrap: nowrap;'><p style='width: 45%; margin: 0; padding: 0; font-weight: bold; text-align: right;'>&nbsp;</p><p style='width: 55%; margin: 0; padding: 0;'>&nbsp;</p></div></div>";

	    // send_mail($message, $name, $email);

	    echo json_encode($message);
	    
	}
	
    function send_mail($message, $name, $email){
        // e-mail to which the letter will come        
        $mail_to = "d.pashkovich@gmail.com";
        // $mail_to = "info@losangelesfurnitureinstallation.com";
        // theme
        $subject = "Get a Quote (" . $name . ")";        
        // letter header
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // letter encoding                
        $headers .= "From: " . $name . " <" . $email . ">\r\n"; // from whom the letter
        $headers .= "Reply-To: " . $email . "\r\n"; // from whom the letter         
         
        // sending a letter
        mail($mail_to, $subject, $message, $headers);
    }
?>