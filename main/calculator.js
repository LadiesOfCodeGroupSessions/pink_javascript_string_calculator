class StringCalculator {

    add(stringOfNumbers) {
        const negativeNumberRegex = /-\d/gm;
        const matched = stringOfNumbers.match(negativeNumberRegex);

        if (matched) {
            throw new Error("Negatives not allowed: " + matched)
        }

        if (stringOfNumbers === "") {
            return 0
        } else if (stringOfNumbers.substring(0, 3) === "//[") {
            const args = this.getMultiCharacterDelimiter(stringOfNumbers);
            return this.addLogic(args.stringOfNumbers, args.delimiterForPassing);
        } else if (stringOfNumbers.substring(0, 2) === "//") {
            // we know that the user wants to specify a custom delimiter of one character

            let delimiter = stringOfNumbers.charAt(2);
            stringOfNumbers = stringOfNumbers.substring(4);

            return this.addLogic(stringOfNumbers, delimiter);

        }
        else {
            const delimiter = /[,\n]+/;
            return this.addLogic(stringOfNumbers, delimiter);
        }
    }

    addLogic(stringOfNumbers, allowedDelimiter) {
        let arrayOfStringNumbers = [];
        arrayOfStringNumbers = stringOfNumbers.split(new RegExp(allowedDelimiter));
        var sum = 0;
        arrayOfStringNumbers.forEach(function (item) {
            item = Number(item);
            if (item <= 1000) {
                sum += item;
            }
        });
        return sum;
    }

    // takes a string of numbers that begins with '//[' and processes all of the delimiter sets
    getMultiCharacterDelimiter(stringOfNumbers) {
        let delimiter = "";
        let firstIndex = stringOfNumbers.indexOf("[");
        let delimiterArray = [];
        while (firstIndex >= 0) {
            let secondIndex = stringOfNumbers.indexOf("]")
            delimiter = stringOfNumbers.substring(firstIndex + 1, secondIndex)
            delimiterArray.push(delimiter);
            stringOfNumbers = stringOfNumbers.substring(secondIndex + 1);
            firstIndex = stringOfNumbers.indexOf("[")
        }
        let delimiterString = delimiterArray.join("");
        let delimiterRegEx = `[${delimiterString}]+`;
        let delimiterForPassing = new RegExp(delimiterRegEx);
        stringOfNumbers = stringOfNumbers.substring(1);
        return { stringOfNumbers, delimiterForPassing};
    }
}



module.exports = StringCalculator
