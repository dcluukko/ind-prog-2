$(document).ready(function() {
	$("form#progLanguage").submit(function(event) {
		event.preventDefault();
		var age = parseInt($("input#age").val());
		var animal = parseInt($("#animal").val());
		var fruit = parseInt($("#fruit").val());
		var city = parseInt($("#city").val());
		var tree = parseInt($("#tree").val());
		var word = parseInt($("#word").val());
		
		var qSums = (animal + fruit + city + tree + word);
		alert(qSums)
		if (animal === 0 || fruit === 0 || city === 0 || tree === 0 || word === 0) {
		$("#please-fill").show();
		} else if (qSums <=5 && age >= 15 ){
			$("#jScript").show();
			$("#python").hide();
			$("#rust").hide();
			$("#swift").hide();
			$("#outside").hide();
			$("#please-fill").hide();
		} else if (qSums >=6 && qSums <=10  && age >= 15) {
			$("#python").show();
			$("#rust").hide();
			$("#swift").hide();
			$("#outside").hide();
			$("#please-fill").hide();
			$("#jScript").hide();
		} else if (qSums >=11 && qSums <= 15 && age >=15) {
			$("#rust").show();
			$("#swift").hide();
			$("#outside").hide();
			$("#please-fill").hide();
			$("#python").hide();
			$("#jScript").hide();
		} else if (qSums >= 16 && qSums <= 20 && age >= 15)	{
			$("#swift").show();
			$("#outside").hide();
			$("#please-fill").hide();
			$("#python").hide();
			$("#rust").hide();
			$("#jScript").hide();
		} else if (age <= 14)	{
			$("#outside").show();
			$("#please-fill").hide();
			$("#jScript").hide();
			$("#python").hide();
			$("#rust").hide();
			$("#swift").hide();
		} else {
			
		}

	});
});


