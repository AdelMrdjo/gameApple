var pozicija = 0;
var hrana_pos = getRndInteger(1,89);
var score = 0;
var level = 1;
var potrebno = 5;
var vrijeme = 10;
var ukupan_score = 0;
		ocistipolja();
		$('i').eq(pozicija).css('opacity','1');
		window.onkeydown=function(e){
			if(e.keyCode==37){ //Kretanje lijevo
				left();
 			}if(e.keyCode==39){ //Kretanje desno
 				right();
			}
			if(e.keyCode == 40){ //Kretanje dole
				down();
			}
			if(e.keyCode == 38){ //Kretanje gore
				up();
			}
			if(pozicija == hrana_pos) novaHrana();
			if(score == potrebno) levelUp();
			$('meter').attr('value',score/potrebno);
			document.getElementById('score_value').innerHTML = score + "/" + potrebno;
			dodajHranu();
		}
		setInterval(function(){
			if(vrijeme == 0) gameOver();
			vrijeme--;
			document.getElementById('time').innerHTML = vrijeme;
		},1000);
		function levelUp(){
			$('#level_value').animate({"opacity":"0"},500,function(){
				$('#level_value').animate({"opacity":"1"},500);
				level++;
				document.getElementById('level_value').innerHTML = level;
			});
			potrebno += 5;
			score = 0;
			vrijeme=potrebno+5;
		}
		function dodajHranu(){//Funckija za iscrtavanje hrane
			for(var i=0;i<89;i++){
				$('span').eq(i).attr('class','player');
				$('i').eq(i).attr('class','fas fa-circle');
			}
			$('i').eq(hrana_pos).attr('class','fas fa-apple-alt');
			$('i').eq(hrana_pos).css('opacity','1');
			$('span').eq(hrana_pos).attr('class','hrana');
		}
		dodajHranu();
		function novaHrana(){//Funckija koja se aktivira ukoliko dodje do poklapanja,jabuka i igrac u istom polju
			var hrana = getRndInteger(1,89);
                        while(pozicija == hrana){
				var hrana = getRndInteger(1,89);
			}
			hrana_pos = hrana;
			score++;
			ukupan_score++;
		}
		function getRndInteger(min, max) { //Funkcija koja mi daje random broj,za pozicioniranje nove jabuke
  			return Math.floor(Math.random() * (max - min)) + min;
		}
		function down(){
			if(pozicija==81 || pozicija==82 || pozicija==83 || pozicija==84 || pozicija==85 || pozicija==86
					|| pozicija==87 || pozicija==88 || pozicija==89){
					return gameOver();
			}
			ocistipolja();
			pozicija+=9;
			$('i').eq(pozicija).css('opacity','1');
		}
		function up(){
			if(pozicija==0 || pozicija==1 || pozicija==2 || pozicija==3 || pozicija==4 || pozicija==5 ||
					pozicija==6 || pozicija==7 || pozicija==8){
					return gameOver();
			}
			ocistipolja();
			pozicija-=9;
			$('i').eq(pozicija).css('opacity','1');
		}
		function right(){
			if(pozicija==8 || pozicija==17 || pozicija==26 || pozicija==35 || pozicija==44 || pozicija==53
 					|| pozicija==62 || pozicija==71 || pozicija==80 || pozicija==89){
 					return gameOver();
 			}
			ocistipolja();
			pozicija+=1;
			$('i').eq(pozicija).css('opacity','1');
		}
		function left(){
			if(pozicija==0 || pozicija==9 || pozicija==18 || pozicija==27 || pozicija==36 || pozicija==45
					|| pozicija==54 || pozicija==63 || pozicija==72 || pozicija==81){
				 	return gameOver();
				}
			ocistipolja();
			pozicija-=1;
			$('i').eq(pozicija).css('opacity','1');
		}
		function ocistipolja(){
			for(var i=0;i<90;i++){
				$("i").eq(i).css("opacity", "0");
			}
		}
		function gameOver(){
			ocistipolja();
			$('#gameOver').css("opacity","1");
			$('.ground').css("opacity","0");
			$('.score').css("opacity","0");
			$('meter').css("display","none");
			document.getElementById('gameover_score').innerHTML = "Total score:<span style='color:#f00'> " +ukupan_score+ "</span>";
			pozicija=0;
		}
		function btn_again(){
			window.location.reload(false);
		}
		function btn_close(){
			window.close();
		}