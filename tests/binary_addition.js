QUnit.test( "binary addition", function( assert ) {
  assert.strictEqual( addBinary(1, 2), "11");
  assert.strictEqual( addBinary(3, 5), "1000");
  assert.strictEqual( addBinary(7, 8), "1111");
});