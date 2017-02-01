$('#subtotal').keyup(function(){calculate_tax()});

$('#calculate_tip').click(function(){calculate_tip()});

$('#clear_fields').click(function(){clear_fields()});
 
var subtotal, tax;

function calculate_tax(){

	subtotal = parseFloat($('#subtotal').val());
	tax = (subtotal * 0.13).toFixed(2);

	$('#tax').val('$' + tax);

	//console.log(tax);
}

function calculate_tip(){
	$('#subtotal').css('border-color','#acaeb0');

	if ($('#subtotal').val() == '' || isNaN(parseFloat($('#subtotal').val())) || subtotal < 0 ) {
		$('#subtotal').css('border-color','red');
		alert ("Please enter the subtotal amount for your order.");

	}
	else if ($('#tip_percent').val() == '' || isNaN(parseFloat($('#tip_percent').val()) ) ) {
		$('#tip_percent').css('border-color','red');
		alert ("Please enter a tip percentage for your order.");
	}
	else {
		var tip_percent = parseFloat($('#tip_percent').val());
		tip_percent = (tip_percent/100);

		var subtotal_amount = parseFloat(tax) + parseFloat(subtotal);
		var tip_amt = (tip_percent * subtotal_amount).toFixed(2);

		$('#tip_amt').val('$' + tip_amt);

		// console.log(subtotal_amount);
		// console.log(tip_amt);

		var total = (parseFloat(subtotal) + parseFloat(tax) + parseFloat(tip_amt)).toFixed(2);

		$('#total_amt').val('$' + total);
		//console.log(total);
	}

}

function clear_fields(){
	$('#subtotal').val("").css("border-color","");
	$('#tip_percent').val("").css("border-color","");
	$('#tax').val("");
	$('#tip_amt').val("");
	$('#total_amt').val("");
}