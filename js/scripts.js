$(document).ready(function() {
	$("form#progLanguage").submit(function(event) {
		var age = parseInt($("input#age").val());
		var animal = parseInt($("#animal").val());
		var fruit = parseInt($("#fruit").val());
		var city = parseInt($("#city").val());
		var tree = parseInt($("#tree").val());
		var word = parseInt($("#word").val());
		
		var qSums = (animal + fruit + city + tree + word);
		alert(qSums)
		if (qSums <=5 && age >= 15 ){
			$("#jScript").show();
		} else if (qSums >=6 && qSums <=10  && age >= 15) {
			$("#python").show();
		} else if (qSums >=11 && qSums <= 15 && age >=15) {
			$("#rust").show();
		} else if (qSums >= 16 && qSums <= 20 && age >= 15)	{
			$("#swift").show();
		} else if (age <= 14)	{
			$("#outside").show();
		} else if (animal === 0 || fruit === 0 || city === 0 || tree === 0 || word === 0 || age < 1)	{
			$("#please-fill")
			alert("nope!")
		} else {
			
		}

		
		

		event.preventDefault();
	});
});


