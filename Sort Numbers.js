function sortNumber(first, second, third){

    let result = [first, second, third];
    result.sort();

    console.log(result.reverse().join('\n'));
}
sortNumber(-2, 1, 3)