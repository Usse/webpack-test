var $ = require('./jquery.js');


var uiMenu = {
	init : function() {

		var styles = require("!style!css!./style.css");
		var sass = require("!style!css!sass!./ui-menu.scss");		

		$('.ui-menu li').on('mouseover', function(e) {
			$(this).addClass('red');
		});
		$('.ui-menu li').on('mouseout', function(e) {
			$(this).removeClass('red');
		});
	}
};



module.exports = uiMenu;