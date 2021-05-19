class StringCalculator {


    Add(stringOfNumbers) {
        if (stringOfNumbers === "") {
            return 0
        } else if (stringOfNumbers.substring(0, 2) === "//") {

            let shortenString = stringOfNumbers.substring(4);
            // let arrayFromString = [];
            // let delimiter = shortenString[1];
            // arrayFromString = shortenString.split(delimiter);
            // var sum = 0;
            // arrayFromString.forEach(function (item) {
            //     item = Number(item);
            //     sum += item;
            //     console.log(sum);
            // });
            // return sum
            return this.addLogic(shortenString);
        }

        else {
            return this.addLogic(stringOfNumbers);
        }
        return Number(stringOfNumbers)
    }

    // add an argument to this function that specifies allowable delimiters
    addLogic(stringOfNumbers) {
        let delimiter = stringOfNumbers[1];
        let arrayOfStringNumbers = [];
        arrayOfStringNumbers = stringOfNumbers.split(delimiter);
        var sum = 0;
        arrayOfStringNumbers.forEach(function (item) {
            item = Number(item);
            sum += item;
        });
        return sum;
    }


}

module.exports = StringCalculator
