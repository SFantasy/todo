var Todo = function() {
	this.todoList = {}
}

$.extend(Todo.prototype, {
	init: function() {
		Todo.bindEvent()
	},
	bindEvent: function() {
		$('#add').on('click', function() {
			Todo.newTodo()
		})
		$.each($('#list'), function(i, item) {

		})
	},
	newTodo: function() {
		var content = $('#content').val()
		$('#list').prepend('<li>' + content + 
			'<button class="complete">complete</button><button class="remove">remove</button></li>' )
	}
})

Todo.init();