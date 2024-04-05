<script>
	//Switching search menu off
	$(document).ready(function () {
		$(".smcl").click(function() {
			if ($(window).width() > 1099) {
				$(".tnm").css("display", "block");
				$(".tns").css("display", "none");
				$(".searchMenuOpen").css("display", "inline-block");
				//making sure that the sitemap list item for search is set as a list item in order to have the bullet point indicator during search menu related activities
				$("#sitemap-stack-content li").css("display", "list-item");
			}
			else{
				$(".tnm").css("display", "none");
			}
		});
	});	
</script>