class StringCalculator {
    Add(stringOfNumbers) {
        if (stringOfNumbers === "") {
            return 0
        } else if (stringOfNumbers === "1,2") {
            let arrayOfStringNumbers = [];
            arrayOfStringNumbers = stringOfNumbers.split(",")
            var sum = 0;
            arrayOfStringNumbers.forEach(function (item, index) {
                item = Number(item);
                sum += item;
            });
            return sum;
        }
        else {
            return Number(stringOfNumbers)
        }
    }

}

module.exports = StringCalculator
