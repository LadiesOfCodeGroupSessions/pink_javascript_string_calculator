class StringCalculator {
    Add(number) {
        if (number === "") {
            return 0
        } else {
            return Number(number)
        }
    }
}

module.exports = StringCalculator
