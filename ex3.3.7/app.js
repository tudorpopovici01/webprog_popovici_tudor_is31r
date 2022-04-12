function extract (a, b){
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numbers1 = [];
    let i = 0;
    for (let index = a; index <= b; index++) {
        numbers1[i] = numbers [index];
        i++;
    }
    return numbers1;
}

alert(extract(2, 4));