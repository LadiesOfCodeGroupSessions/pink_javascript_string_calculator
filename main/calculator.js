class StringCalculator {
    Add(stringOfNumbers) {
        if (stringOfNumbers === "" ) {
            return 0
        } else if(stringOfNumbers.substring(0,2) ==="//" ) { 

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
