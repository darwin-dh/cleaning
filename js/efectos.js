$(document).ready(function(){
// Efecto Menu
	$('#menu a').each(function(index, elemento){
		$(this).css({
			'top': '-800px'
		});

		$(this).animate({
			top: '0'
		},2000 + (index * 500));
	});
// Efecto Header

});