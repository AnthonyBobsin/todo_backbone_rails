Todo.Views.TodosIndex = Backbone.View.extend({

  template: JST['todos/index'],

  events: {
  	'click #submit': 'createEntry'
  },

  initialize: function() {
  	this.collection.on('reset', this.render, this);
  	this.collection.on('add', this.appendEntry, this);
  },

  render: function() {
  	$(this.el).html(this.template({todoentries: this.collection}));
  	this.collection.each(this.appendEntry, this);
  	return this;
  },

  appendEntry: function(entry) {
  	var view = new Todo.Views.Todo({model: entry});
  	this.$('#todo-list').append(view.render().el);
  },

  createEntry: function() {
  	var entry = {
  		title: $('#new-todo').val(),
  		completed: false
  	};
  	console.log(entry);
  	this.collection.create(entry);
  }

});
