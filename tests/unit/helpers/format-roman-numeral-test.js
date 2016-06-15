import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('format-roman-numeral', {
  integration: true
});

test('I', function (assert) {
  this.render(hbs`{{format-roman-numeral 1}}`);
  assert.equal(this.$().text(), 'I');
});

test('IV', function (assert) {
  this.render(hbs`{{format-roman-numeral 4}}`);
  assert.equal(this.$().text(), 'IV');
});

test('IV', function (assert) {
  this.render(hbs`{{format-roman-numeral 4}}`);
  assert.equal(this.$().text(), 'IV');
});

test('XXII', function (assert) {
  this.render(hbs`{{format-roman-numeral 22}}`);
  assert.equal(this.$().text(), 'XXII');
});

test('LXIX', function (assert) {
  this.render(hbs`{{format-roman-numeral 69}}`);
  assert.equal(this.$().text(), 'LXIX');
});

test('LXXXVII', function (assert) {
  this.render(hbs`{{format-roman-numeral 87}}`);
  assert.equal(this.$().text(), 'LXXXVII');
});
