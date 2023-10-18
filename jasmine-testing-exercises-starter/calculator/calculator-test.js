describe('calculateMontlyPayment tests', () => {
  it('should calculate the monthly rate correctly', function () {
    let values = {amount: 100000, years: 20, rate: 0.12}
    expect(calculateMonthlyPayment(values)).toEqual('1101.09')
    values = {amount: 100000, years: 20, rate: 0.24}
    expect(calculateMonthlyPayment(values)).toEqual('2017.41')
    values = {amount: 1000, years: 20, rate: 0.12}
    expect(calculateMonthlyPayment(values)).toEqual('11.01')
    values = {amount: 100000, years: 10, rate: 0.12}
    expect(calculateMonthlyPayment(values)).toEqual('1434.71')
  });
  
  it("should return a result with 2 decimal places", function() {
    let randomAmount = Math.floor(Math.random() * 100000)
    let randomYear = Math.floor(Math.random() * 100)
    let randomRate = Math.random()
    let values = {amount: randomAmount, years: randomYear, rate: randomRate}
    expect(calculateMonthlyPayment(values)).toMatch(/\d+\.\d{2}$/)
  });
})


/// etc
