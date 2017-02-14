QUnit.test( "shortest word length", function( assert ) {
  assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
  assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
  assert.strictEqual(findShort("hi some  word"), 2);
});