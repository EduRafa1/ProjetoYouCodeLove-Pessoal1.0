<!DOCTYPE html>
<html lang="pt-br">
<head>
		<meta http-equiv="cache-control" content="public">
	<meta http-equiv="content-language" content="pt-br">
	<meta charset="utf-8">
	<meta HTTP-EQUIV="Expires" CONTENT="Thu, 28 Oct 2021 16:22:01 GMT">
	
	<meta name="copyright" content="2021 YouCodeLove">
	<meta name="generator" content="Sublime Text">
	<meta name="rating" content="general">

	<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=5.0">
	<meta name="description" content="YouCodeLove é uma empresa que divulga cursos profissionalizantes com certificados de Hardware, Programação, Robótica entre outros!">
	<meta name="author" content="Eduardo Rafael, YouCodeLove">
	<meta name="keywords" content="desenvolvimento web,marketing digital,curso de programação de sites,java,javascript,front-end,web developer,back-end,php,cursos online com certificado,cursos a distância">
	<meta name="robots" content="index,follow">
	<link rel="sortcut icon" href="imagens/icon.webp" type="image/webp" />

	<link rel="stylesheet" type="text/css" href="css/footer.css">
	<link rel="stylesheet" type="text/css" href="css/capitar-email.css">
	<link rel="stylesheet" type="text/css" href="css/header.css">
	<link rel="stylesheet" type="text/css" href="css/contato.css">
	<link href="https://fonts.googleapis.com/css2?family=Newsreader:wght@200&display=swap" rel="stylesheet">
	
	
	<title>YouCodeLove</title>
</head>




<body>
	<?php 
	include('header.php');

	?>


		<section class="public">
			<div class="redes-sociais">
				<div class="container-redes-sociais">
		<!--
					<div><a href="#"><img src="imagens/face.png"></a></div>
					<div><a href="#"><img src="imagens/instagram.png"></a></div>
					<div><a href="#"><img src="imagens/twitter.png"></a></div>
					<div><a href="#"><img src="imagens/youtube.png"></a></div>
					--->

				</div><!--container-redes-sociais-->
			</div><!--redes-sociais-->

			<div class="banner-cursos">

				
					
				
			</div><!--banner-cursos-->	




	</section ><!--public-->
	<div class="clear"></div>

<!--/********************Sobre A Empresa*********************//-->
	
	<section class="pedidos">
		
			<div class="line"></div>
			<h2>Entre em contato</h2>
			<p>Tem perguntas, comentários ou pedidos especiais? Será um prazer 	atendê-lo, então entre em contato conosco.</p>
		<div class="container-pedidos">


			<form method="post">
				<label for="name">Nome</label>
				<input required  type="text" name="nome">
				<div></div>
				<label for="email">E-mail</label>
				<input required  type="text" name="email">
				<div></div>
				<label for="mensagem">Mensagem:</label>
				<textarea required name="mensagem"></textarea>
				<input type="submit" name="acao" value="Enviar!">
			</form>
		</div><!--container-pedidos-->

		
	</section><!--pedidos-->
	



	
	<?php 

	if(isset($_POST['email']) && !empty($_POST['email'])){

	$nome = addslashes($_POST['nome']);
	$email = addslashes($_POST['email']);
	$mensagem= addslashes($_POST['mensagem']);


	$to = "contato@youcodelove.com";
	$subject = "Contato - YouCodeLove";
	$body = "Nome: ".$nome. "\r\n".
			"Email: ".$email. "\r\n".
			"Mensagem".$mensagem;


	$header = "From: eduardo@youcodelove.com"."\r\n"
				."Reply-to:".$email."\r\n"
				."X-Mailer:PHP".phpversion();

	if (mail($to, $subject,$body,$header)) {
		echo ("Enviado com sucesso");
	}else{
		echo("ouve um erro");
	}
}




	?>


	<?php 

	include('footer.php');
	?>
</div><!--bg-->

</body>


<!-- / https://go.hotmart.com/K48571732E / link  hotmart -->


