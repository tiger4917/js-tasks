let array = [1, 34, 16, 0, 34, -5, 0, 16, '', 'et45', 'kjhgkj'];
let countOfEvenEls = 0;
let countOfOddEls = 0;
let countOfZiro = 0;
let countOfOverEls = 0;

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number' && typeof array[i] !== NaN) {
        if (array[i] === 0) {
            countOfZiro++;
        }
        (array[i] % 2 === 0 && typeof array[i] === 'number') ? countOfEvenEls++ : countOfOddEls++;
        countOfOverEls++;
    }
}
console.log(`в массиве чётных элементов ${countOfEvenEls}  и  нечётных элементов ${countOfOddEls}`);
console.log(`в том числе элементов равных ноль - ${countOfZiro}`);
console.log(`и количество элементов не с числами ${countOfOverEls}`);