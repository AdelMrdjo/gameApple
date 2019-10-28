for(var i=0;i<90;i++){
	var new_p_tag = $("<div></div>").html("<span class='player'><i class='fas fa-circle'></i></span>");
	new_p_tag.attr("class","polje");
	$(".ground").append(new_p_tag);
}