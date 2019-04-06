function repeat(operation, num) {
    while(num > 0) {
        operation();
        num--;
    }
}

module.exports = repeat;