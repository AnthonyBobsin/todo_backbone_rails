window.Todo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Todo.Routers.Todos();
    Backbone.history.start({ pushState: true });
  }
};

$(document).ready(function(){
  Todo.initialize();
});
