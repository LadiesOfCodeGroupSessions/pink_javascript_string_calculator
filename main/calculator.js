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
            // we know that the user wants to specify a custom delimiter
            let delimiter = "";
            let shortenString = "";
            let firstIndex = stringOfNumbers.indexOf("[");
            // here we find out if there is a '[' in the string
            // (if so, the user wants to give us multiple custom delimiters)
            let delimiterArray = [];
            // empty array of delimiters
            // ask: is there a left bracket?
            while ( firstIndex >= 0)
            {
                // There is a left bracket!
                // so, we need to find out where the right bracket is
                let secondIndex = stringOfNumbers.indexOf("]")
                // the delimiter is the text in between the left and right bracket
                delimiter = stringOfNumbers.substring(firstIndex + 1, secondIndex)
                // save that delimiter in the array
                delimiterArray.push(delimiter);
                // cut off the beginning of stringOfNumbers to eliminate // and [...]
                stringOfNumbers = stringOfNumbers.substring(secondIndex +1);
                // store next left bracket (if there is one)
                firstIndex = stringOfNumbers.indexOf("[")

            }
            // now we have an array of one or more custom delimiters
            delimiter = `/[${delimiterArray.join("")}]+/`
            // we need to transform this array into a regular expression
            // that we can pass to addLogic()
            return this.addLogic(?, delimiter);//?to be continued

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
