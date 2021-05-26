class StringCalculator {

    add(stringOfNumbers) {
        const negativeNumberRegex = /-\d/gm;
        const matched = stringOfNumbers.match(negativeNumberRegex);
        
        if (matched) {
            throw new Error("Negatives not allowed: " + matched)
        }

        if (stringOfNumbers === "") {
            return 0
        } else if (stringOfNumbers.substring(0, 2) === "//") {
            let delimiter = "";
            let shortenString = "";
            const thirdChar = stringOfNumbers[2];
            if (thirdChar === "[") {
                const index = stringOfNumbers.indexOf("]");
                delimiter = stringOfNumbers.substring(3, index);
                shortenString = stringOfNumbers.substring(index + 2);
            } else {
                delimiter = thirdChar;
                shortenString = stringOfNumbers.substring(4);
            }
            return this.addLogic(shortenString, delimiter);
        }
        else {
            const delimiter = /[,\n]+/;
            return this.addLogic(stringOfNumbers, delimiter);
        }
    }

    addLogic(stringOfNumbers, allowedDelimiter) {
        let arrayOfStringNumbers = [];
        arrayOfStringNumbers = stringOfNumbers.split(allowedDelimiter);
        var sum = 0;
        arrayOfStringNumbers.forEach(function (item) {
            item = Number(item);
            if(item <= 1000){
                sum += item;
            }    
        });
        return sum;
    }
}

module.exports = StringCalculator
