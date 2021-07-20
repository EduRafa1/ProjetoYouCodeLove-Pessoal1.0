$(function(){
	var avancar = false;
	$('#buttom').click(function(){
		
	var email = $('input[name=email]').val();


	if(email == " "){
		return false;
	}
	if(!email.match(/^([a-zA-Z0-9-_.]{1,})+@+([a-zA-Z]{1,})+.c+([a-zA-Z.]{2,})$/)){
		aplicarCampoInvalido($('input[name=email]'));
		alert('EMAIL INCORRETO');
	}else{
		avancar = true;
		alert('CADASTRO CONCLUIDO');

	}



})
	function aplicarCampoInvalido(el){
		el.css('border','1px solid red');
	}
	function resetarCampoInvalido(el){
		el.css('border','0');
	}
	
})