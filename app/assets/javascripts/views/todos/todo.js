Todo.Views.Todo = Backbone.View.extend({

	template: JST['todos/todo'],

	events: {
		'click .check': 'toggleCompleted',
		'click .edit button': 'editEntry'
	},

	tagName: 'li',

	model: Todo.Models.Todo,

	initialize: function() {
		this.model.on('change', this.render, this);
	},

	render: function() {
		$(this.el).html(this.template({entry: this.model}));
		return this;
	},

	toggleCompleted: function() {
		var current = this.model.get('completed');
		this.model.set({completed: !current});
		this.model.save();
	},

	editEntry: function() {
		var newTitle = $('.todo-input').val();
		this.model.set({title: newTitle});
		this.model.save();
	}
});