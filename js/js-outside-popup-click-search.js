<script>
	//Outside popup click - close the search bar
	$(document).mouseup(function (e) {
		var container1 = $(".tns");
		if(!container1.is(e.target) && container1.has(e.target).length === 0){
			container1.hide();
			if ($(window).width() > 1099) {
				$(".tnm").css("display", "block");
			}	
		}				
	});	
</script>