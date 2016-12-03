import { test } from 'qunit';
import moduleForAcceptance from 'brink-admin/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dashboard');

test('should redirect to rental route', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/dashboard', 'should redirect automatically');
  });
});
