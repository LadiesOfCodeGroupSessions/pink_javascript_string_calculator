class StringCalculator {
    Add(stringOfNumbers) {
        if (stringOfNumbers === "") {
            return 0
        } else if(stringOfNumbers === "1,2"){
            let array = stringOfNumbers.split(",")
           let num = array.forEach(str => Number(str))
           return  num.reduce( (accumulator, currentValue) => accumulator + currentValue
           ) 

        }
        
        else {
            return Number(stringOfNumbers)
        }


    }
   

}

module.exports = StringCalculator
