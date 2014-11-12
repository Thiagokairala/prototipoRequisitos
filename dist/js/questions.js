$(document).ready(function() {
	$('#send_questions').click(function(){
		number_of_radios = $('input:radio:checked', '#answers').length;
		if(number_of_radios == 3) {
			$('#answers').submit();
		} else {
			$('#not_answered').fadeIn('slow');
		}
	});
});