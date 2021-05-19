class StringCalculator {
    Add(stringOfNumbers) {
        if (stringOfNumbers === "" ) {
            return 0
        } else if(stringOfNumbers.substring(0,2) === "//" ) { 
            
            let shortenString = stringOfNumbers.substring(4);
            let arrayFromString = [];
            let semicolon = shortenString[1];
            arrayFromString =  shortenString.split(semicolon);
            let sum = +arrayFromString[0] + +arrayFromString[arrayFromString.length -1];
            console.log("this is arrayFromString ", sum);
            return sum
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
