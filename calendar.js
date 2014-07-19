var Calendar = (function(){

	// Calendar ID
	var CALENDAR_ID = "calendar";

	// Calendar Module
	var Calendar = {};

	// Initialize
	Calendar.init = function(){
		console.log($('#'+CALENDAR_ID));
	};

	// Hook .onload Event
	Calendar.hookOnLoad = function(){
		$(function(){ Calendar.init(); });
	};

	return Calendar;

})();

Calendar.hookOnLoad();
