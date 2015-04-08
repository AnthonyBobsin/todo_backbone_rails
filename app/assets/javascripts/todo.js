window.Todo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	// Initialize the router
    new Todo.Routers.Todos();
    // Start history
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Todo.initialize();
});
