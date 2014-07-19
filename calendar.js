var Calendar = (function(){

	// Calendar ID
	var CALENDAR_ID = "calendar";

	// Calendar Module
	var Calendar = {};

	// Initialize
	Calendar.init = function(){
		var t = this;
		t.calendar = $('#'+CALENDAR_ID);
		t.setDateNow();
	};

	// Stringify String
	Calendar.stringifyMonth = function(m) {
		return (m < 9)?("0"+(m+1)):(""+(m+1));
	};

	// Update Date String
	Calendar.updateDateString = function(){
		var t = this;
		$('.year_string').text(t.year);
		$('.month_string').text(t.stringifyMonth(t.month));
		return t;
	};

	// Set Date
	Calendar.setDate = function(y, m, d){
		var t = this;
		t.year = y;
		t.month = m;
		t.date = d;
		t.first_day = t.getFirstDay(y, m);
		t.updateDateString();
		return t;
	};

	// Set Date Now
	Calendar.setDateNow = function(){
		var date = new Date();
		this.setDate(date.getFullYear(), date.getMonth(), date.getDate());
		return this;
	};

	// Get Day of Month's First
	Calendar.getFirstDay = function(y, m){
		return new Date(y, m, 1, 0, 0, 0, 0).getDay();
	};

	// Hook .onload Event
	Calendar.hookOnLoad = function(){
		$(function(){ Calendar.init(); });
	};

	return Calendar;

})();

Calendar.hookOnLoad();
