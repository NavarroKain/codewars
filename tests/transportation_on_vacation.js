QUnit.Test("Regular Tests:", function() {
  Test.it("Should work for under 3 days:", function() {
    Test.equal(rentalCarCost(1), 40);
    Test.equal(rentalCarCost(2), 80);
  });
  Test.it("Should work for under 7 days:", function() {
    Test.equal(rentalCarCost(3), 100);
    Test.equal(rentalCarCost(4), 140);
    Test.equal(rentalCarCost(5), 180);
    Test.equal(rentalCarCost(6), 220);
  });
  Test.it("Should work for 7 or more days:", function() {
    Test.equal(rentalCarCost(7), 230);
    Test.equal(rentalCarCost(8), 270);
    Test.equal(rentalCarCost(9), 310);
    Test.equal(rentalCarCost(10), 350);
  });
});
