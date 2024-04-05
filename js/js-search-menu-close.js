<?php
//Beisance|Intelix Custom script For Beisance
//We are echoing the javascript in php in order to utilize the WorPress function. This isn't the standard way to do this. We will fix our approach in a future update. - O J 31/12/18.
?>

<?php
	echo ('
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
	</script>');
?>