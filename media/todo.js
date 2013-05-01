var $ = function(id) { return document.getElementById(id) };
var newElement = function(type) { return document.createElement(type) };

//var taskNumber = 0;
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
	},
	// create new item
	newItem: function() {
		var l = newElement('li');
		var s = newElement('span');
		l.className = 'items';
		var btn1 = newElement('button');
		btn1.innerHTML = 'Remove';
		btn1.className = 'remove';
		var btn2 = newElement('button');
		btn2.innerHTML = 'Complete';
		btn2.className = 'complete';
		l.appendChild(s);
		l.appendChild(btn1);
		l.appendChild(btn2);
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
				//Todo.updateCount();
			} else {
				return;
			}
			//taskNumber++;
			Todo.editItems();
			Todo.markComplete();
			Todo.removeTodo();
			Todo.updateCount();
		};
	},
	// update count number of todos
	updateCount: function() {
		var n = 0;
		var l = $('list').childNodes;
		for(var i = 0; i < l.length; i++) {
			if(l[i].firstChild.className !== 'completed') {
				n++;
			}
		}
		$('count').firstChild.innerHTML = n;
	},
	// remove todo
	removeTodo: function() {
		var btn = document.getElementsByClassName('remove');
		var c = $('list').childNodes;
		
		if(btn.length !== 1) {
			btn.conclick = function() {
				$('list').removeChild(c);
			}
		}
		for(var i = 0; i < btn.length; i++) {
			(function(cur) {
				btn[cur].onclick = function() {
					$('list').removeChild(c[cur]);
					Todo.editItems();
					Todo.updateCount();
				}
			}) (i);
		}
	},
	// mark as completed
	markComplete: function() {
		var btn = document.getElementsByClassName('complete');
		var c = $('list').childNodes;
		for(var i = 0; i < btn.length; i++) {
			(function(cur) {
				btn[cur].onclick = function() {
					c[cur].firstChild.className = 'completed';
					Todo.updateCount();
					Todo.clearCompleted();
				}
			}) (i);
		}
	},
	// edit the itmes
	editItems: function() {
		var c = $('list').childNodes;
		for(var i = 0; i < c.length; i++) {
			(function(cur) {
				c[cur].ondblclick = function() {
					c[cur].firstChild.setAttribute('contenteditable', 'true');
				}
				c[cur].onmouseout = function() {
					c[cur].firstChild.setAttribute('contenteditable', 'false');
				}
			}) (i);
		}
	},
	// clear completed tasks
	clearCompleted: function() {
		var c = $('list').childNodes;
		$('clear').onclick = function() {
			for(var i = 0; i < c.length; i++) {
				if(c[i].firstChild.className === 'completed') {
					$('list').removeChild(c[i])
					c = $('list').childNodes;
				}
			}
			Todo.editItems();
			Todo.markComplete();
			Todo.removeTodo();
			Todo.updateCount();
		}
	}
}

window.onload = Todo.init();
