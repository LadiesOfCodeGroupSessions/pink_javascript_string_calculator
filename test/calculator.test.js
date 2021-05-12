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

test('input 1 and 2, get 3 back', () => {
    calculator = new StringCalculator()
    const result = calculator.Add("1,2")
    expect(result).toBe(3);
});

test('input 2 and 2, get 4 back', () => {
    calculator = new StringCalculator()
    const result = calculator.Add("2,2")
    expect(result).toBe(4);
});

test('input 1, 2, 3 and 2 get 8 back', () => {
    calculator = new StringCalculator()
    const result = calculator.Add("1,2,3,2")
    expect(result).toBe(8);
});

test('input "1\n2,3" returns 6', () => {
    calculator = new StringCalculator();
    const result = calculator.Add("1\n2,3");
    expect(result).toBe(6);
})

test('input "//;\n1;2" returns 3 (the delimiter is ";")', ()=>{
    calculator = new StringCalculator(); 
    const result = calculator.Add("//;\n1;2"); 
    expect(result).toBe(3);
})