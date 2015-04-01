DS.RESTAdapter.reopen({
  namespace: "api/v1"
});

EmberTester.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create()
});