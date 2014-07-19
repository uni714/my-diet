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

	// Get Days in a month
	Calendar.getDaysInMonth = function(y, m){
		var days = [31,28,31,30,31,30,31,31,30,31,30,31];
		return ((y%4 == 0) && (m == 1))?29:(days[m]);
	};

	// Update Day Cells
	Calendar.updateDayCells = function(){
		var t = this,
		fix_first_day = (t.first_day+6)%7,
		current_day = 0,
		days = t.getDaysInMonth(t.year, t.month),
		tbody = t.calendar.find('tbody');
		end_flag = false,
		start_flag = false,
		tr = null,
		td = null;
		while(!end_flag){
			tr = $('<tr />');
			tbody.append(tr);
			for (var i = 0; i < 7; i++){
				if ((!start_flag) && (fix_first_day == i)) {
					start_flag = true;
				}
				if (start_flag){
					current_day++;
					if (current_day <= days){
						td = $('<td>'+current_day+'</td>');
						tr.append(td);
						if (i == 5) td.addClass('sat');
						if (i == 6) td.addClass('sun');
					} else {
						end_flag = true;
						tr.append('<td />');
					}
				} else {
					tr.append('<td />');
				}
			}
		}
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
		t.updateDayCells();
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
