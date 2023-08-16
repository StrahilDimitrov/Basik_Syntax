function multiplication(number) {

    let result = 0;

    for (let index = 1; index <= 10; index++) {
        result = number * index;

        console.log(`${number} x ${index} = ${result}`);
    }
}
multiplication(5)