<?php 
	
	if ($_POST["form__name"] !== '' && 
		$_POST["form__phone"] !== '' && 
		$_POST["form__email"] !== '' &&
		$_POST["form_message"] !== '') {

	    $name = $_POST["form__name"];
	    $phone = $_POST["form__phone"];
	    $email = $_POST["form__email"];
	    $message = $_POST["form__message"];

    	$msg = "<div style='width: 550px; font-family: Arial, sans-serif; border-top: 1px dashed #aaaaaa;'>    	
			    	<div style='display: flex; flex-wrap: nowrap; width: 100%; border-bottom: 1px dashed #aaaaaa;'>
			    		<p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Имя</p>
			    		<p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $name . "</p>
			    	</div>
			    	<div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'>
			    		<p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Телефон</p>
			    		<p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $phone . "</p>
			    	</div>
			    	<div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'>
			    		<p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>E-mail</p>
			    		<p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $email . "</p>
			    	</div>
			    	<div style='display: flex; width: 100%; flex-wrap: nowrap; border-bottom: 1px dashed #aaaaaa;'>
			    		<p style='width: 45%; margin: 0; padding: 10px 20px; font-weight: bold; background-color: #f2f2f2; text-align: right;'>Текст заказа</p>
			    		<p style='width: 55%; margin: 0; padding: 10px 20px;'>" . $message . "</p>
			    	</div>
					<div style='display: flex; width: 100%; flex-wrap: nowrap;'><p style='width: 45%; margin: 0; padding: 0; font-weight: bold; text-align: right;'>&nbsp;</p><p style='width: 55%; margin: 0; padding: 0;'>&nbsp;</p>
					</div>
				</div>";

	    if(send_mail($name, $phone, $email, $msg)) {
	    	$result = array('msg' => 'Спасибо! С Вами свяжутся в ближайшее время', 'status' => true);
	    	
	    } else {
	    	$result = array('msg' => 'Ошибка отправки сообщения!', 'status' => false);
	    }	    
	    echo json_encode($result);	    
	    
	} else {
		$result = array('msg' => 'Все поля обязательны для заполнения!', 'status' => false);
		echo json_encode($result);
	}


	
    function send_mail($name, $phone, $email, $msg) {
        // e-mail to which the letter will come        
        // $mail_to = "d.pashkovich@gmail.com";
        $mail_to = "info@expressrail.ru";
        
        // тема
        $subject = "Заявка на расчет (" . $name . ")";        
        // заголовки письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: " . $name . " <no-reply@expressrail.ru>\r\n"; // от кого письмо
        // $headers .= "From: " . $name . " <" . $email . ">\r\n"; // от кого письмо
        $headers .= "Reply-To: " . $email . "\r\n";
         
        // отправка письма
        if(mail($mail_to, $subject, $msg, $headers)) {
        	return true;	
        } else {
        	return false;
        }
        
    }
?>