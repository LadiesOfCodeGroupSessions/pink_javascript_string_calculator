class StringCalculator {
    Add(stringOfNumbers) {
        if (stringOfNumbers === "") {
            return 0
        } else if(stringOfNumbers === "1,2"){
            stringOfNumbers = stringOfNumbers.split(",")
            console.log(stringOfNumbers)

        }
        
        else {
            return Number(stringOfNumbers)
        }


    }
   

}

module.exports = StringCalculator
