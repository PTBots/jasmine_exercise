
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 5,
    rate: 10,
  };
  expect(calculateMonthlyPayment(values)).toEqual('212.47')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 15000,
    years: 10,
    rate: 5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('159.10')
});
/// etc

it("should only accept positive integers", function() {
  const values = {
    amount: -10000,
    years: 5,
    rate: 5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('NaN')
  // expect(document.querySelector(#amount).alert).toHaveBeenCalledWith('Value must be greater than or equal to 0.')
});

it("should handle terribly high interest rates", function() {
  const values = {
    amount: 1000,
    years: 40,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});