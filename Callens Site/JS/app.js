$( document ).ready(function() {
	// OPEN MENU
	var menu_bar 	= document.getElementById('menu-bar');
	var mobile_menu = document.getElementsByClassName('mobile-menu')[0];
	var close_menu  = document.getElementById('close-menu');

	menu_bar.addEventListener('click', function() {
		mobile_menu.style.display = 'inherit';
	});

	close_menu.addEventListener('click', function() {
		mobile_menu.style.display = 'none';
	});
});