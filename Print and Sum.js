function printAndSum(startNum, endNum) {

    let print = "";
    let sum = 0;

    for (let index = startNum; index <= endNum; index++) {
        print += index + " ";
        sum += index;
    }

    console.log(print);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)