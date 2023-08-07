function oddNumberSum(number) {
    let result = 0;
    let count = 0;

    for (let secondIndex = 1; secondIndex <= 100; secondIndex++) {
        if (secondIndex % 2 != 0) {
            console.log(secondIndex);
            count++;
        }

        result += count;

        if (count == number) {
            console.log(`Sum: ${result}`);
            break;
        }
    }
}
oddNumberSum(5)