import Ember from 'ember';

let models = [{
  id: 'users',
  name: 'Users'
}, {
  id: 'rabbits',
  name: 'Rabbits'
}, {
  id: 'hunters',
  name: 'Hunters'
}];

export default Ember.Route.extend({
  model() {
    return models;
  }
});
