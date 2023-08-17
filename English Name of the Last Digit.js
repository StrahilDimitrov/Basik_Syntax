function englishNameLastDigit(number) {
    let num = number.toString();
    let numberLength = num.length;
    let result = '';

    for (let index = 0; index < numberLength; index++) {

        if (num[numberLength - 1] === '1') {
            result = 'one';
        }
        else if (num[numberLength - 1] === '2') {
            result = 'two';
        }
        else if (num[numberLength - 1] === '3') {
            result = 'three';
        }
        else if (num[numberLength - 1] === '4') {
            result = 'four';
        }
        else if (num[numberLength - 1] === '5') {
            result = 'five';
        }
        else if (num[numberLength - 1] === '6') {
            result = 'six';
        }
        else if (num[numberLength - 1] === '7') {
            result = 'seven';
        }
        else if (num[numberLength - 1] === '8') {
            result = 'eight';
        }
        else if (num[numberLength - 1] === '9') {
            result = 'nine';
        }
        else {
            result = 'zero';
        }
    }

    console.log(result);
}
englishNameLastDigit(512)