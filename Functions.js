const FizzBuzz = n => {
    for (let i = 0; i != n; ++i) {
        if (!(i % 15)) {
            console.log("fizzbuzz");
        } else if (!(i % 5)) {
            console.log("buzz");
        } else if (!(i % 3)) {
            console.log("fizz");
        } else {
            console.log(i);
        }
    }
    return;
}

FizzBuzz(20);

const mapFor = (arr, func) => {
    result = []
    for (let i = 0; i != arr.length; ++i) {
        result.push(func(arr[i]));
    }
    return result;
}

const mapForEach = (arr, func) => {
    result = []
    arr.forEach( (x) => result.push(func(x)));
    return result;
}

console.log(mapForEach([1,2,3,4,5], x => x + 2));

//e.t.c.


const mean = arr => {
    const result = arr.reduce((sum, x) => { return sum +x;}, 0);
    return result / arr.length;
}

console.log(mean([1,10,3]));
