describe("extractCurrencyValue", function() {

  it("returneaza pentru string $120 numar 120", function() {
    assert.strictEqual(extractCurrencyValue('$120'), 120);
  });


});