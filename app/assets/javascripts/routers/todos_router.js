Todo.Routers.Todos = Backbone.Router.extend({
	// Routes hash
	routes: {
		// Default route calls index function
		'': 'index',
		'about': 'aboutPage'
	},

	// initialize function
	initialize: function() {
		// Instantiates Todos collection and fetchs data
		this.collection = new Todo.Collections.Todos();
		this.collection.fetch();
	},

	// Index function
	index: function() {
		// create new collections view and render it into the #container
		var view = new Todo.Views.TodosIndex({collection: this.collection});
		$('#container').html(view.render().el);
	},

	// About function
	aboutPage: function() {
		var view = new Todo.Views.About();
		$('#container').html(view.render().el);
	}
});
