// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//= require jquery
//= require rails-ujs
//= require turbolinks
//= require_tree .


function result() {
	if (isNaN(eval(cal.input.value))) {
		cal.input.value = 0;
		document.getElementById("calculator-submission").value = document.getElementById("calculator-result").value
		$("input[type=submit]").click();	
	} else {
		cal.input.value = eval(cal.input.value);
		document.getElementById("calculator-submission").value = document.getElementById("calculator-result").value
		$("input[type=submit]").click();
	}
}

function reset() {
	cal.input.value = null;
}

function sqrt() {
	cal.input.value = Math.sqrt(cal.input.value);
	if (isNaN(eval(cal.input.value))) {
		cal.input.value = 0;
		result();	
	} else{
		cal.input.value = eval(cal.input.value);
		result();
	} 
}

function sqr() {
	cal.input.value = cal.input.value * cal.input.value;
	result()
}

function inverse() {
	cal.input.value = 1.00 / cal.input.value;
	result()
}

function delChar(i) {
	cal.input.value = cal.input.value.substring(0, cal.input.value.length - 1);
}


