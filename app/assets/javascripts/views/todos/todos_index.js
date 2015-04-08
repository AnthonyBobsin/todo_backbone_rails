Todo.Views.TodosIndex = Backbone.View.extend({

  // Assign template element for this View
  template: JST['todos/index'],

  // Events hash
  events: {
    // On click of submit button, call create entry method
  	'click #submit': 'createEntry',
    'keypress #new-todo': 'testForEnter'
  },

  initialize: function() {
    // listen for reset to render whole collection or add to append new entry
  	this.collection.on('reset', this.render, this);
  	this.collection.on('add', this.appendEntry, this);
    this.collection.on('remove', this.render, this);
  },
  
  // Render this todo view
  render: function() {
    // Set this view's html to be this template injected with this.collection
  	$(this.el).html(this.template({todoentries: this.collection}));
    // Loop through collection and append all entries
  	this.collection.each(this.appendEntry, this);
  	return this;
  },

  // Append the todo view onto the ul
  appendEntry: function(entry) {
    // Create a new Todo View for each entry, then render and append it
  	var view = new Todo.Views.Todo({model: entry});
  	this.$('#todo-list').append(view.render().el);
  }, 

  // Create a new todo object
  createEntry: function() {
    // If user input
    if ($('#new-todo').val()) {
      // create new entry attributes hash
    	var entry = {
    		title: $('#new-todo').val(),
    		completed: false
    	};
      // create entry
    	this.collection.create(entry);
      $('#new-todo').val('');
    }
  },

  // If user presses enter from new todo call createEntry
  testForEnter: function(key) {
    if (key.which == 13) {
      this.createEntry();
    }
  }

});
