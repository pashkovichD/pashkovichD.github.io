<?php 
	
	if(isset($_POST["form__id"]) && $_POST["form__id"] == 'join-form') {

		if (isset($_POST["form__name"]) && isset($_POST["form__email"])) { 	

		    $name = test_input($_POST["form__name"]);
		    $email = test_input($_POST["form__email"]);

		    (!isset($_POST["form__phone"]) || $_POST["form__phone"] == '') ? $phone = '-' : $phone = test_input($_POST["form__phone"]);
		    (!isset($_POST["form__age"]) || $_POST["form__age"] == '') ? $age = '-' : $age = test_input($_POST["form__age"]);
		    (!isset($_POST["form__message"]) || $_POST["form__message"] == '') ? $msg = '-' : $msg = test_input($_POST["form__message"]);
		    (!isset($_POST["form__commitment"]) || $_POST["form__commitment"] == '') ? $commitment = '-' : $commitment = test_input($_POST["form__commitment"]);
		    (!isset($_POST["form__sport"]) || $_POST["form__sport"] == '') ? $sport = '-' : $sport = test_input($_POST["form__sport"]);

			$message = "<div style='width: 550px; font-family: Arial, sans-serif; border-top: 1px dashed #aaaaaa;'>
	    					<div style='display: flex; flex-wrap: nowrap; width: 100%; border-bottom: 1px dashed #aaaaaa;'>
	    						<p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Name</p>
	    						<p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $name . "</p>
	    					</div>
	    					<div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'>
	    						<p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Email</p>
	    						<p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $email . "</p>
	    					</div>
	    					<div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'>
	    						<p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Phone</p>
	    						<p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $phone . "</p>
	    					</div>    					
	    					<div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'>
	    						<p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Age Range</p>
	    						<p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $age . "</p>
	    					</div>
	    					<div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'>
	    						<p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Why is clean sport important to you?</p>
	    						<p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $msg . "</p>
	    					</div>
	    					<div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'>
	    						<p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>How Would You Define Your Commitment?</p>
	    						<p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $commitment . "</p>
	    					</div>
	    					<div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'>
	    						<p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>What Sport Do You Play for Competition?</p>
	    						<p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $sport . "</p>
	    					</div>
							<div style='display: flex; width: 100%; flex-wrap: nowrap;'>
								<p style='width: 45%; margin: 0; padding: 0; font-weight: bold; text-align: right;'>&nbsp;</p>
								<p style='width: 55%; margin: 0; padding: 0;'>&nbsp;</p>
							</div>
						</div>";

		    send_mail($message, $name, $email);

		    echo json_encode($message);
		    
		}	
	}

	if(isset($_POST["form__id"]) && $_POST["form__id"] == 'contact-form') {
		
		if (isset($_POST["form__name"]) && isset($_POST["form__email"])) { 	

		    $name = test_input($_POST["form__name"]);
		    $email = test_input($_POST["form__email"]);

		    (!isset($_POST["form__phone"]) || $_POST["form__phone"] == '') ? $phone = '-' : $phone = test_input($_POST["form__phone"]);
		    (!isset($_POST["form__subject"]) || $_POST["form__subject"] == '') ? $subject = '-' : $subject = test_input($_POST["form__subject"]);
		    (!isset($_POST["form__message"]) || $_POST["form__message"] == '') ? $msg = '-' : $msg = test_input($_POST["form__message"]);		    

		    $message = "<div style='width: 550px; font-family: Arial, sans-serif; border-top: 1px dashed #aaaaaa;'>
	    					<div style='display: flex; flex-wrap: nowrap; width: 100%; border-bottom: 1px dashed #aaaaaa;'>
	    						<p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Name</p>
	    						<p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $name . "</p>
	    					</div>
	    					<div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'>
	    						<p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Email</p>
	    						<p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $email . "</p>
	    					</div>
	    					<div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'>
	     						<p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Phone no.</p>
	     						<p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $phone . "</p>
	     					</div>    					
	     					<div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'>
	     						<p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Subject</p>
	     						<p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $subject . "</p>
	     					</div>
	     					<div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'>
	     						<p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Message</p>
	     						<p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $msg . "</p>
	     					</div>
							<div style='display: flex; width: 100%; flex-wrap: nowrap;'>
								<p style='width: 45%; margin: 0; padding: 0; font-weight: bold; text-align: right;'>&nbsp;</p>
								<p style='width: 55%; margin: 0; padding: 0;'>&nbsp;</p>
							</div>
						</div>";			

		    send_mail($message, $name, $email);

		    echo json_encode($message);
		    
		}	
	}

	
	
    function send_mail($message, $name, $email) {
        // e-mail to which the letter will come        
        $mail_to = "info@supportcleansport.com";
        // $mail_to = "info@losangelesfurnitureinstallation.com";
        // theme
        $subject = "Clean Sport (" . $name . ")";        
        // letter header
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // letter encoding                
        $headers .= "From: " . $name . " <" . $email . ">\r\n"; // from whom the letter
        $headers .= "Reply-To: " . $email . "\r\n"; // from whom the letter
         
        // sending a letter
        mail($mail_to, $subject, $message, $headers);
    }

	function test_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
?>