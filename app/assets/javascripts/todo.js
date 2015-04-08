window.Todo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	// Initialize the router
    new Todo.Routers.Todos();
    // Start history, pushState: true removes need for # sign in urls
    Backbone.history.start({ pushState: true });
  }
};

$(document).ready(function(){
  Todo.initialize();
});
