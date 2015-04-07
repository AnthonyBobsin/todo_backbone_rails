Todo.Collections.Todos = Backbone.Collection.extend({

  model: Todo.Models.Todo,

  url: '/api/todo_entries'

});
