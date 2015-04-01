EmberTester.PostsRoute = Ember.Route.extend({
  model: function() {
    EmberTester.Post.find();
  }
});