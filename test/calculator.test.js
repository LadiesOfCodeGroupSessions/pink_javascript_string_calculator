const StringCalculator = require("../main/calculator");


test('input empty string and return 0', () => {
    calculator = new StringCalculator()
    const result = calculator.Add("")

    expect(result).toBe(0)
});
