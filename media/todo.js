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
			var btn1 = document.createElement('button');
			btn1.innerHTML = 'Remove';
			btn1.className = 'remove';
			var btn2 = document.createElement('button');
			btn2.innerHTML = 'Complete';
			btn2.className = 'complete';
			l.appendChild(s);
			l.appendChild(btn1);
			l.appendChild(btn2);
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
					$('.remove')[temp].onclick = function() {
						($('#list').children()[temp]).remove();
						App.updateCount();
					};
				}) (i);
			}
		},
		updateCount: function() {
			$('#count>strong').text($('#list>li').length);
			this.removeTodo();
		}
	}
	
	App.init();
});