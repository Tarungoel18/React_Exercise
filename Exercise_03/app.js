function getCardPosition(arr, card) {
    return arr.indexOf(card);
}

const card = 9;
const res = getCardPosition([9, 7, 3, 2], card);
console.log(res);



function doesStackIncludeCard(arr, card) {
    return arr.includes(card);

}
const card2 = 10;
const res2 = doesStackIncludeCard([2, 3, 4, 5], card2);
console.log(res2);



function isEachCardEven(arr) {
    return arr.every((it) => it % 2 == 0)

}
const res3 = isEachCardEven([2, 4, 6, 8]);
console.log(res3);



function doesStackIncludeOddCard(arr) {
    return arr.some((it) => it % 2 == 1)
}

const res4 = doesStackIncludeOddCard([10, 2, 6, 4, 8]);
console.log(res4);



function getFirstOddCard(arr) {
    return arr[arr.findIndex((it) => {
        return it % 2 == 1
    })]

}

const res5 = getFirstOddCard([4, 2, 8, 9, 12]);
console.log(res5);




function getFirstEvenCardPosition(arr) {
    return arr.findIndex(it => it % 2 == 0)
}
const res6 = getFirstEvenCardPosition([5, 2, 3, 1]);
console.log(res6);