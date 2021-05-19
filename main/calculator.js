class StringCalculator {


    Add(stringOfNumbers) {
        if (stringOfNumbers === "") {
            return 0
        } else if (stringOfNumbers.substring(0, 2) === "//") {
            const delimiter = stringOfNumbers[2];
            let shortenString = stringOfNumbers.substring(4);
            return this.addLogic(shortenString, delimiter);
        }

        else {
            const delimiter = /[,\n]+/;
            return this.addLogic(stringOfNumbers, delimiter);
        }
    }

    // add an argument to this function that specifies allowable delimiters
    addLogic(stringOfNumbers, allowedDelimiter) {
        let arrayOfStringNumbers = [];
        arrayOfStringNumbers = stringOfNumbers.split(allowedDelimiter);
        var sum = 0;
        arrayOfStringNumbers.forEach(function (item) {
            item = Number(item);
            sum += item;
        });
        return sum;
    }


}

module.exports = StringCalculator
