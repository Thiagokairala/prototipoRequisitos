$(document).ready(function() {
	$('#login').click(function() {
		var name = /user/,
			password = /123456/,
			formName = $('#user_name').val(),
			formPassword = $('#password').val();

		if(formName.match(name) && formPassword.match(password)) {
			$('#login_form').submit();
		} else {
			$('#wrong_credentials').fadeIn('slow');
		}

	});
});