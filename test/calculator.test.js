const StringCalculator = require("../main/calculator");


test('input empty string and return 0', () => {
    calculator = new StringCalculator()
    const result = calculator.Add("")

    expect(result).toBe(0)
});

test('input one number, get number back', () => {
    calculator = new StringCalculator()
    const result = calculator.Add("1")
    expect(result).toBe(1);
});