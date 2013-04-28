var $ = function(id) { return document.getElementById(id) };

var todo = {
	newTodo: function() {
		$('new').onkeydown = function(e) {
			e = e || window.event;
			if(e.keyCode === 13) {
				console.log("Yes!");
			}
		};
	}
}