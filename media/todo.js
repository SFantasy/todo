var $ = function(id) { return document.getElementById(id) };

var Todo = {
	init: function() {
		this.newTodo();
	},

	newTodo: function() {
		$('new').onkeydown = function(e) {
			e = e || this.event;
			if(e.keyCode === 13 && this.value) {
				// add new todo to the list
				var newItem = document.createElement('li');
				newItem.innerHTML = this.value;
				$('list').appendChild(newItem);
				this.value = '';
				Todo.updateCount();
			} else {
				return;
			}
		};
	},

	updateCount: function() {
		$('count').firstChild.innerHTML = 
			$('list').getElementsByTagName('li').length.toString();
	}
}

Todo.init();
