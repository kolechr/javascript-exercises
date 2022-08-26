const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    }
    // let a = 0;
    // let b = 1;
    // for (let i = 1; i < num; i++) {
    //     const c = b;
    //     b = a + b;
    //     a = c;
    // }
    // return b;
    let prev = 1;
    let curr = 1;
    for (let i = 2; i < num; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
