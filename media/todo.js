jQuery(function($) {
	var App = {
		init: function() {
			this.bindEvents();
			this.updateCount();
		},
		bindEvents: function() {
			var list = $('#list');
			$('#new').on('keyup', this.newTodo);
			//list.on('click', '.remove', this.removeTodo);
		},
		newItem: function() {
			var l = document.createElement('li');
			var s = document.createElement('span');
			l.className = 'items';
			var btn = document.createElement('button');
			btn.innerHTML = 'Remove';
			btn.className = 'remove';
			l.appendChild(s);
			l.appendChild(btn);
			return l;
		},
		newTodo: function(e) {
			var $input = $(this);
			var val = $.trim($input.val());

			if(e.which !== 13 || !val) {
				return;
			}
			var newItem = App.newItem();
			newItem.firstChild.innerHTML = val;
			$('#list').append(newItem);
			$input.val('');
			App.updateCount();
		},
		removeTodo: function() {
			for(var i = 0; i < $('.remove').length; i++) {
				(function(temp) {
					$('.remove')[temp].onclick =  function() {
						$('#list>.items:eq(temp)').remove();
					};
				}) (i);
			}
		},
		updateCount: function() {
			$('#count>strong').text($('#list>li').length);
			this.removeTodo();
		},
		editTodo: function() {
		}
	}
	
	App.init();
})