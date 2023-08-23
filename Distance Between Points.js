function distance(X1, Y1, X2, Y2) {

    let a = Math.abs(X1 - X2);
    let b = Math.abs(Y1 - Y2);
    let distancePoint = Math.sqrt((a * a) + (b * b));

    console.log(distancePoint);
}
distance(2, 4, 5, 0)