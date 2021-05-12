class StringCalculator {
    Add(stringOfNumbers) {
        if (stringOfNumbers === "" ) {
            return 0
        } else if(stringOfNumbers.substring(0,2) === "//" ) { 
            let semicolon = ';';
            let shortenString = stringOfNumbers.substring(4)
            shortenString.split(semicolon);
            var sum = 0;
            shortenString.forEach(function (item) {
                item = Number(item);
                sum += item;
            })
        }

        else {
            let arrayOfStringNumbers = [];
            arrayOfStringNumbers = stringOfNumbers.split(/[,\n]+/);
            var sum = 0;
            arrayOfStringNumbers.forEach(function (item) {
                item = Number(item);
                sum += item;
            });
            return sum;
        }
        return Number(stringOfNumbers)
    }

}

module.exports = StringCalculator
