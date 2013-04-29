var $ = function(id) { return document.getElementById(id) };
var newElement = function(type) { return document.createElement(type) };
// my implements of getElementsByClassName('tagName', 'className')
/*
var getElementsByClassName = function(tagName, className) {
	var elements = document.getElementsByTagName('tagName');
	var result = new Array();
	for(var i = 0; i < elements.length; i++) {
		if(i.className === 'className') {
			result.push(elements[i]);
		}
	}
	return result;
};
*/

var Todo = {
	// initialization function
	init: function() {
		this.newTodo();
		(this.removeTodo)();
	},
	// create new item
	newItem: function() {
		var l = newElement('li');
		var s = newElement('span');
		l.className = 'items';
		var btn = newElement('button');
		btn.innerHTML = 'Remove';
		btn.className = 'remove';
		l.appendChild(s);
		l.appendChild(btn);
		return l;
	},
	// add new todo to the list
	newTodo: function() {
		$('new').onkeydown = function(e) {
			e = e || this.event;
			if(e.keyCode === 13 && this.value) {
				var newItem = Todo.newItem();
				newItem.firstChild.innerHTML = this.value;
				$('list').appendChild(newItem);
				this.value = '';
				Todo.updateCount();
			} else {
				return;
			}
		};
	},
	// update count number of todos
	updateCount: function() {
		$('count').firstChild.innerHTML = 
			$('list').getElementsByTagName('li').length.toString();
	},
	// remove todo
	removeTodo: function() {
		var btn = document.getElementsByClassName('remove');
		var c = $('list').childNodes;
		for(var i = 0; i < btn.length; i++) {
			(function(cur) {
				btn[cur].onclick = function() {
					$('list').removeChild(c[cur]);
				}
			}) (i);
		}
	}
}

window.onload = Todo.init();
