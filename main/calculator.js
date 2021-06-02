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
            let firstIndex = stringOfNumbers.indexOf("[");
            let delimiterArray = [];
            const thirdChar = stringOfNumbers[2];
            while ( firstIndex >= 0)
            {
                let secondIndex = stringOfNumbers.indexOf("]")
                delimiter = stringOfNumbers.substring(firstIndex + 1, secondIndex)
                delimiterArray.push(delimiter);
                stringOfNumbers = stringOfNumbers.substring(secondIndex +1);
                firstIndex = stringOfNumbers.indexOf("[")

            }
            console.log(delimiterArray);

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
