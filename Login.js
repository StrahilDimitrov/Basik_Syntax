function logIn(array) {

    let userName = array.shift();
    let errors = 0;

    for (let index = 0; index < array.length; index++) {
        let currentPass = array[index];
        let reversedPass = currentPass.split("").reverse().join("");

        if (reversedPass === userName) {
            console.log(`User ${userName} logged in.`);
        }

        if (reversedPass !== userName) {

            if (errors === 3) {
                console.log(`User ${userName} blocked!`);
                break;
            }

            console.log('Incorrect password. Try again.');
            errors++;
        }
    }
}
logIn(
    [
        'Acer',
        'login',
        'go',
        'let mi in',
        'recA'
    ]
)