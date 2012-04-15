$(document).ready(function() {
	
	var vyhercovia = [
		"email1@gmail.com",
		"email2@gmail.com",
		"email3@azet.sk",
		"email4@azet.sk",
		"email5@gmail.com",
		"email6@seznam.cz",
		"email7@zoznam.sk",
	];
	
	var counter = 0,
		max_counter = vyhercovia.length,
		speed = 100,
		checker = true,
		zrebovanie = 0;
	   
	function run() {
		
		zrebovanie = setInterval( function(){
			if(counter < max_counter && checker) {
				$('#content').html(vyhercovia[counter]);
				if(counter === max_counter-1) {
					counter = 0;
				}
				counter++;
			}
		}, speed );
	};        
	  
	function stop() {
		checker = false; 
		clearInterval(zrebovanie);
		$('#content').html(vyhercovia[counter]);
	};
	
	$('#run').click(function(){  
		checker = true;
		run();
	});  
	
	$('#stop').click(function(){
		stop();
	});
	
	
});