// You are given an array (which will have a length of at least 3,
// but could be very large) containing integers. The array is either entirely 
// comprised of odd integers or entirely comprised of even integers except for a 
// single integer N. Write a function that takes the array as an argument and 
// returns this “outlier” N.

// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11(the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160(the only even number)

function returnOutlier(intArr) {
    // const [first, second, third] = intArr;
    let evens = 0;
    for (let i = 0; i < 3; i++) {
        if (intArr[i] % 2 === 0) evens++;
    };
    //or
    // if(first % 2 === 0) evens++;
    // if(second % 2 === 0) evens++;
    // if(third % 2 === 0) evens++;

    let isArrEven = evens > 1;
    // console.log(isArrEven);

    for (let i = 0; i < intArr.length; i++) {
        const isCurrentEven = intArr[i] % 2 === 0;
        if ((isArrEven && !isCurrentEven) || (!isArrEven && isCurrentEven)) {
            console.log(intArr[i]);
            return intArr[i];
        };
    };
};

returnOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);