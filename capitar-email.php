
<section class="captura-email">
		<div class="line"></div>
		<h2>Quero receber notificações de novos cursos.</h2>

		<form method="post">
			<label for="name">Nome: </label>
			<input type="text" name="name" class="w100" required >
			<label for="email">E-mail</label>
			<input type="text" name="email" class="w100" required="">
			<input id="buttom" type="submit" name="acao" value="Enviar!">
			
		</form>
	</section><!--capta-email-->





<?php 
	
	
		# code...
	
	
	if(isset($_POST['email']) && !empty($_POST['email'])){
		
		$nome = addslashes($_POST['name']);
		$email = addslashes($_POST['email']);
	
		$to = "contato@youcodelove.com";
		$subject = "Contato - YouCodeLove";
		$body = "Nome: ".$nome. "\r\n".
				"Email: ".$email."\r\n";


		$header = "From: eduardo@youcodelove.com"."\r\n"
		."Reply-to:".$email."\r\n"
		."X-Maller:PHP/".phpversion();


		if(mail($to, $subject, $body, $header)){
			echo ("Email enviado com sucesso");
		}else{
			echo ("nao pode ser enviado");
		}


	}
	



 ?>
<script src="js/valida-email.js"></script>