Todo.Views.Todo = Backbone.View.extend({

	// Load template for each single todo
	template: JST['todos/todo'],

	// Event Hash
	events: {
		// on click check class call toggleCompleted function
		'click .check': 'toggleCompleted',
		// on click delete class buton call deleteEntry function
		'mousedown .delete': 'deleteEntry',
		// On blur switch back to title
		'keypress .todo-input': 'editEntry',
		// On dblClick replace with edit
		'dblclick .todo-content': 'switchEdit',
		// On edit blur try to edit entry
		'blur .todo-input': 'blurEdit'
	},

	// Default wrapper is a div so set wrapper to li
	tagName: 'li',

	// Specify which model
	model: Todo.Models.Todo,

	// Called on initialization
	initialize: function() {
		// If change to model, then render
		this.model.on('change', this.render, this);
	},

	render: function() {
		// This views html consists of this.template injected with this.model
		$(this.el).html(this.template({entry: this.model}));
		return this;
	},

	// Switch completed value
	toggleCompleted: function() {
		// Get current completed status
		var current = this.model.get('completed');
		// Toggle and save this models completed status
		this.model.set({completed: !current});
		this.model.save();
	},

	// Handle edits to model's title
	editEntry: function(key) {
		if (key.which == 13 || key == -999) {
			// If edit field has input on button click
			if ($('.todo-input').val()) {
				// get edit field value
				var newTitle = $('.todo-input').val();
				// set and save new title
				this.model.set({title: newTitle});
				this.model.save();	
			}
			this.$('.edit').hide();
			this.$('.display').show();
		}
	},

	// Blur edit entry
	blurEdit: function() {
		this.editEntry(-999);
	},

	// Switch to edit input when dblclick
	switchEdit: function() {
		this.$('.display').hide();
		this.$('.edit').css("display", "inline");
		this.$('.todo-input').val(this.model.get('title'));
		this.$('.todo-input').focus();
	},

	// Delete this model
	deleteEntry: function() {
		this.model.destroy();
		this.stopListening();
	}
});