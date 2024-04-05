$(document).ready(function () {
	$(window).resize(function () {
		if ($(window).width() > 1099) {
			$(".searchMenuOpen").css("display", "inline-block");
			$(".tnm").css("display", "block");
		}
		else
		{
			document.getElementById("topnav-menu-button-img").src = "');bloginfo('stylesheet_directory'); echo('/img/header/topnav-menu-button.png";
			$(".tnm").css("display", "none");
			$(".searchMenuOpen").css("display", "none");
			$(".tmm").css("right", "-100vh");
		}
		$(".tns").css("display", "none");
		$(".tnl").css("display", "block");
		$(".ovl-m").css("display", "none");
		$(".mb").css("overflow", "unset");
		document.getElementById("logo-mobile-image").src = "');bloginfo('stylesheet_directory'); echo('/img/header/logo-none.png";
		document.getElementById("mobile-menu-button-close-img").src = "');bloginfo('stylesheet_directory'); echo('/img/header/mobile-menu-close.png";
	});
});
