$(document).ready(function(){
	//bind enter key to click button
	$(document).keypress(function(e){
    	if (e.which == 13){
    		if($('#loginform').is(":visible")){
    			$("#loginbutton").click();
    		}
        	else if($('#signupform').is(":visible")){
        		$("#signupbutton").click();
        	}
    	}
	});

	$('#signup').click(function(){
		$('#loginform').slideUp();
		$('#signupform').slideDown();
		$('#myalert').slideUp();
		$('#signform')[0].reset();
	});

	$('#login').click(function(){
		$('#loginform').slideDown();
		$('#signupform').slideUp();
		$('#myalert').slideUp();
		$('#logform')[0].reset();
	});

	$(document).on('click', '#signupbutton', function(){
		if($('#susername').val()!='' && $('#spassword').val()!=''){
			$('#signtext').text('Registrandose...');
			$('#myalert').slideUp();
			var signform = $('#signform').serialize();
			$.ajax({
				method: 'POST',
				url: 'registro.php',
				data: signform,
				success:function(data){
					setTimeout(function(){
					$('#myalert').slideDown();
					$('#alerttext').html(data);
					$('#signtext').text('Registrarse');
					$('#signform')[0].reset();
					}, 2000);
				} 
			});
		}
		else{
			alert('Por favor rellene todos los campos');
		}
	});

	$(document).on('click', '#loginbutton', function(){
		if($('#username').val()!='' && $('#password').val()!=''){
			$('#logtext').text('Logueandose...');
			$('#myalert').slideUp();
			var logform = $('#logform').serialize();
			setTimeout(function(){
				$.ajax({
					method: 'POST',
					url: 'login.php',
					data: logform,
					success:function(data){
						if(data==''){
							$('#myalert').slideDown();
							$('#alerttext').text('Login correcto!');
							$('#logtext').text('Login');
							$('#logform')[0].reset();
							setTimeout(function(){
								location.reload();
							}, 2000);
						}
						else{
							$('#myalert').slideDown();
							$('#alerttext').html(data);
							$('#logtext').text('Login');
							$('#logform')[0].reset();
						}
					} 
				});
			}, 2000);
		}
		else{
			alert('Por favor rellene todos los campos');
		}
	});
});