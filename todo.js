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
			$.each(Todo.appdata.todos, function(i, item) {
				if(item.complete === true) {
					$('#list').prepend('<li><strike><span>' + item.content + '</span></strike>' +
						'<button class="complete">complete</button>' +
						'<button class="remove">remove</button></li>');
				} else {
					$('#list').prepend('<li><span>' + item.content + '</span>' +
						'<button class="complete">complete</button>' +
						'<button class="remove">remove</button></li>');					
				}
			});
			Todo.bindEvent();
		}
		$('#add').on('click', function() {
			Todo.newTodo();
			Todo.bindEvent();
		});
		Todo.bindEvent();
	},
	// function ready for later use(refactor or other)
	setData: function() {
		localStorage.setItem('todo', JSON.stringify(Todo.appdata));
	},
	getData: function() {
		localStorage.getItem('todo');
		Todo.appdata = JSON.parse(d);
	},
	bindEvent: function() {
		// why the click event will happen twice here?
		$.each($('#list li'), function(i, item) {
			$('.complete', item).on('click', function() {
				console.log(1);
				Todo.completeTodo(item, i);
			});
			$('.remove', item).on('click', function() {
				console.log(2);
				Todo.removeTodo(item, i);
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
	completeTodo: function(el, i) {
		$(el).find('span').wrap('<strike>');

		Todo.appdata.todos[Todo.appdata.todos.length - i - 1].complete = true;
		localStorage.setItem('todo', JSON.stringify(Todo.appdata));
	},
	removeTodo: function(el, i) {
		$(el).remove();
		Todo.appdata.todos.splice((Todo.appdata.todos.length - i - 1), 1);
		localStorage.setItem('todo', JSON.stringify(Todo.appdata));
	}
};

Zepto(function($) {
	Todo.init();
});