function reverseString(input) {

    let result = [];

    for (let index = 0; index < input.length; index++) {
        let currentDigit = input[index];

        result.push(currentDigit);
    }

    console.log(result.reverse().join(""));
}
reverseString('Hello')