function monthPrinter(number) {

    let month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'Octomber',
        'November',
        'December'
    ]

    if (number >= 1 && number <= 12) {
        console.log(`${month[number - 1]}`);
    }
    else {
        console.log('Error!');
    }
}
monthPrinter(13)