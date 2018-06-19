function cubeOdd(arr) {
    let filterArray = arr.filter(i => i % 2 != 0);
    let newArray = filterArray.map(i => Math.pow(i, 3)).reduce((a, b) => a + b);

    if (isNaN(newArray)) {
        return undefined;
    } else {
        return newArray;
    }
}