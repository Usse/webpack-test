
var $ = require('./jquery.js');
var math = require('./sum.js');
var uiMenu = require('./ui-menu.js');

$('body').on('click', function(){
	alert('click');
});

console.log(math.sum(10,5));
console.log(math.sub(10,5));

uiMenu.init();
