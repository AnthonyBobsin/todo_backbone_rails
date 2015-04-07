Todo.Routers.Todos = Backbone.Router.extend({
	routes: {
		'': 'index'
	},

	initialize: function() {
		this.collection = new Todo.Collections.Todos();
		this.collection.fetch();
	},

	index: function() {
		var view = new Todo.Views.TodosIndex({collection: this.collection});
		$('#container').html(view.render().el);
	}
});
