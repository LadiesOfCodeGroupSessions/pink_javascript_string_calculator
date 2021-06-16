const StringCalculator = require("../main/calculator");


test('input empty string and return 0', () => {
    calculator = new StringCalculator()
    const result = calculator.add("")

    expect(result).toBe(0)
});

test('input one number, get number back', () => {
    calculator = new StringCalculator()
    const result = calculator.add("1")
    expect(result).toBe(1);
});

test('input 1 and 2, get 3 back', () => {
    calculator = new StringCalculator()
    const result = calculator.add("1,2")
    expect(result).toBe(3);
});

test('input 2 and 2, get 4 back', () => {
    calculator = new StringCalculator()
    const result = calculator.add("2,2")
    expect(result).toBe(4);
});

test('input 1, 2, 3 and 2 get 8 back', () => {
    calculator = new StringCalculator()
    const result = calculator.add("1,2,3,2")
    expect(result).toBe(8);
});

test('input "1\\n2,3" returns 6', () => {
    calculator = new StringCalculator();
    const result = calculator.add("1\n2,3");
    expect(result).toBe(6);
})



test('input "//;\\n1;2;4" returns 7 (the delimiter is ";")', ()=>{
    calculator = new StringCalculator(); 
    const result = calculator.add("//;\n1;2;4"); 
    expect(result).toBe(7);
})

test('input "-1,2" throws exception "Negatives not allowed: -1"', ()=>{
    calculator = new StringCalculator(); //arrange
    expect(() => {
        calculator.add("-1,2");   // act
    }).toThrow("Negatives not allowed: -1"); //assert
})

test('input "2,-4,3,-5" throws "Negatives not allowed: -4,-5"', ()=>{
    calculator = new StringCalculator(); //arrange
    expect(() => {
        calculator.add("2,-4,3,-5");   // act
    }).toThrow("Negatives not allowed: -4,-5"); //assert
})
//test.only to run just 1 test 

test('Numbers greater than 1000 should be ignored.', ()=>{
    calculator = new StringCalculator();
    const result = calculator.add("1001,2"); 
    expect(result).toBe(2);
})

test('Delimiters can be any length, using this syntax: "//[|||]\\n1|||2|||3" returns 6.', ()=>{
    calculator = new StringCalculator();
    const result = calculator.add("//[|||]\n1|||2|||3"); 
    expect(result).toBe(6);
})
test.only('Allow multiple delimiters, using this syntax: "//[|][%]\n1|2%3"  returns 6.', ()=>{
    calculator = new StringCalculator();
    const result = calculator.add("//[|][%]\n1|2%3"); 
    expect(result).toBe(6);
})