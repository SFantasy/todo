var Todo = {
	init: function() {
		if(localStorage.getItem('todo') === null) {
			var t = { 
				'appname': 'todo', 
				'todos': []
			}
			localStorage.setItem('todo', JSON.stringify(t));
			Todo.appdata = t;
		} else {
			var d = localStorage.getItem('todo');
			Todo.appdata = JSON.parse(d);
		}
		Todo.bindEvent();
	},
	bindEvent: function() {
		$('#add').on('click', function() {
			Todo.newTodo();
			$.each($('#list li'), function(i, item) {
				$('.complete', item).on('click', function() {
					Todo.completeTodo(item);
				});
				$('.remove', item).on('click', function() {
					Todo.removeTodo(item);
				});
			});
		});
	},
	newTodo: function() {
		var content = $('#content').val();
		$('#list').prepend('<li><span>' + content + '</span>' +
			'<button class="complete">complete</button>' +
			'<button class="remove">remove</button></li>');

		var n = {
			'content': content,
			'complete': false
		}
		Todo.appdata.todos.push(n);
		var t = JSON.stringify(Todo.appdata);
		localStorage.setItem('todo', t);
		$('#content').val('');
	},
	completeTodo: function(el) {
		$(el).find('span').wrap('<strike>');
	},
	removeTodo: function(el) {
		$(el).remove();
	}
};

Zepto(function($) {
	Todo.init();
});