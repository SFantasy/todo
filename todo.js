var Todo = {
	init: function() {
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