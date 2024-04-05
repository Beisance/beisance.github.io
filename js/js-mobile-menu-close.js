<?php
//Beisance|Intelix Custom script For Beisance
//We are echoing the javascript in php in order to utilize the WorPress function. This isn't the standard way to do this. We will fix our approach in a future update. - O J 31/12/18.
?>

<?php
	echo ('
	<script>
		function mobileMenuClose() {
			//Switching menu buttons to close state
				document.getElementById("topnav-menu-button-img").src = "');bloginfo('stylesheet_directory'); echo('/img/header/topnav-menu-button.png";
				$(".ovl-m").css("display", "none");
				document.getElementById("logo-mobile-image").src = "');bloginfo('stylesheet_directory'); echo('/img/header/logo-none.png";
				document.getElementById("search-submit-mobile").src = "');bloginfo('stylesheet_directory'); echo('/img/header/search-icon.png";
				//Toggling the mobile menu
				$(".tmm-m").animate({right: "-100vh"}, 800);
				$(".tnl").css("display", "block");
				//Enable page scrolling: resetting the class for the body
				$(".mb").css("overflow", "unset");
		}
	</script>');
?>