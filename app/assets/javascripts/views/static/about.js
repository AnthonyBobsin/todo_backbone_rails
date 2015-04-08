Todo.Views.About = Backbone.View.extend({

	template: JST['static/about'],

	defaults: {
		name: 'Anthony Bobsin',
		body: 'This is a todo-list written with Backbone.js, using Rails as an API.',
		contact: 'bobsinj@gmail.com'
	},

	className: 'aboutPage',

	initialize: function() {

	},

	render: function() {
		$(this.el).html(this.template({name: this.defaults.name, body: this.defaults.body, contact: this.defaults.contact}));
		return this;
	}




});