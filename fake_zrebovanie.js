$(document).ready(function() {
	
	var counter = 0;
	var max_counter = 50;
	var speed = 100;
	var checker = true;
	var cisloPokusu = 1;  
	var zrebovanie = 0;
	
	var vyhercovia = [];
	vyhercovia[1] = "a.fischerova@gmail.com";
	vyhercovia[2] = "hanabenakova@gmail.com";
	vyhercovia[3] = "lucilianna@azet.sk";
	vyhercovia[4] = "dancyman@azet.sk";
	vyhercovia[5] = "wanny@centrum.sk";
	vyhercovia[6] = "andrea.rakovska@gmail.com";
	vyhercovia[7] = "Susisan1@azet.sk";
	vyhercovia[8] = "barbora.fursten@gmail.com";
	vyhercovia[9] = "michalmaro91@gmail.com";
	vyhercovia[10] = "baluchmisko@gmail.com";
	vyhercovia[11] = "maniak.fun@centrum.sk";
	vyhercovia[12] = "fyjko@azet.sk";
	vyhercovia[13] = "john.zizou@gmail.com";
	vyhercovia[14] = "zuzana.burri@gmail.com";
	vyhercovia[15] = "tkorbel@gmail.com";
	vyhercovia[16] = "ivana.dur@gmail.com";
	vyhercovia[17] = "veronika.gulasova@gmail.com";
	vyhercovia[18] = "mirushka7@gmail.com";
	vyhercovia[19] = "kuboszabo@gmail.com";
	vyhercovia[20] = "borlabulabarbula@gmail.com";
	vyhercovia[21] = "stanova.lenka@centrum.sk";
	vyhercovia[22] = "juro4446@gmail.com";
	vyhercovia[23] = "mishka.hanzelova@gmail.com";
	vyhercovia[24] = "gergely.sabine@azet.sk";
	vyhercovia[25] = "michalstolarik@gmail.com";
	vyhercovia[26] = "nina.machacova@gmail.com";
	vyhercovia[27] = "roman6020@centrum.sk";
	vyhercovia[28] = "michaela.ivanickova@gmail.com";
	vyhercovia[29] = "mp@tasty.sk";
	vyhercovia[30] = "lenga.novosad@gmail.com";
	vyhercovia[31] = "ivan.lohnicky@gmail.com";
	vyhercovia[32] = "adrian.meri@gmail.com";
	vyhercovia[33] = "mikelioportfolio@gmail.com";
	vyhercovia[34] = "evlahyova2@gmail.com";
	vyhercovia[35] = "mi-ska1@azet.sk";
	vyhercovia[36] = "samsung221@azet.sk";
	vyhercovia[37] = "kaktuskgb@gmail.com";
	vyhercovia[38] = "lucia.vaniherova@gmail.com";
	vyhercovia[39] = "nikoleta.stipalova@gmail.com";
	vyhercovia[40] = "rysankova.sabina@gmail.com";
	vyhercovia[41] = "sokolik@gpnet.sk";
	vyhercovia[42] = "lks.lukas.k@gmail.com";
	vyhercovia[43] = "zelenakova.dominika@gmail.com";
	vyhercovia[44] = "blinkk@azet.sk";
	vyhercovia[45] = "rajsky.tomas@gmail.com";
	vyhercovia[46] = "m.bajzikova@zoznam.sk";
	vyhercovia[47] = "lejla_x3@pobox.sk";
	vyhercovia[48] = "didad@post.sk";
	vyhercovia[49] = "lucia.horniackova@gmail.com";
	vyhercovia[50] = "petrana.zemanova@gmail.sk";    
	   
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
		if(cisloPokusu == 1) {
			//akoze tu nebude
			$('#content').html("haulik.maros1d2@gmail.com");
		}                                                               
		if(cisloPokusu == 2) {
			//vyherca
			$('#content').html("roarbb@gmail.com");
		}            
		if(cisloPokusu > 2) {
			$('#content').html(vyhercovia[counter]);
		}
		cisloPokusu++;
	};
	
	$('#run').click(function(){  
		checker = true;
		run();
	});  
	
	$('#stop').click(function(){
		stop();
	});
	
	
});