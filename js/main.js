$(document).ready(function  () {
	$("#navbar-toggle").click(function  () {
		$("#nav").slideToggle("fast");
	});

	var nav = new FlexibleNavMaker(".navtitle").make().prependTo('body');
	new FlexibleNav(nav);

});
