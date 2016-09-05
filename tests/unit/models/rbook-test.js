import { moduleForModel, test } from 'ember-qunit';

moduleForModel('rbook', 'Unit | Model | rbook', {
  // Specify the other units that are required for this test.
  needs: ['model:author', 'model:publisher']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
