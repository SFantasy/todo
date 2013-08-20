var Todo = {
	init: function() {
		Todo.bindEvent()
	},
	bindEvent: function() {
		$('#add').on('click', function() {
			Todo.newTodo()
		})
	},
	newTodo: function() {
		var content = $('#content').val()
		$('#list').prepend('<li><span>' + content
			+ '</span>'
			+ '<button class="complete">complete</button>'
			+ '<button class="remove">remove</button></li>')

		$.each($('#list > li'), function(i, item) {
			$('.remove', item).on('click', function() {
				console.log(item)
			})
		})

		$('#content').val('')
	},
	removeTodo: function() {

	}
}

Todo.init()