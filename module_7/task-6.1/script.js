
let word = prompt('Введите слово');
let wordReverse = word.split('').reverse().join('');

word === wordReverse ? console.log(`слово ${word} - является палиндромом`) : console.log(`слово ${word} - не является палиндромом`);
    


