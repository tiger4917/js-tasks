let x = prompt('Введите какое нибудь значение');
x = + x;
if (typeof x === 'number' && !isNaN(x)) {
    if(x % 2 === 0){
        console.log(`${x} - четное число`);
    }
    if(x % 2 !== 0){
        console.log(`${x} - нечетное число`);
    }
} else {
    console.log(`Упс, кажется, вы ошиблись`);
}