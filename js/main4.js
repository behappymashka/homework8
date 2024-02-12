//Данное целое число. Выяснить, является ли оно простым
// (простым называется число, больше 1, не имеющее других делителей кроме 1 и себя).

let N = parseInt(prompt("Введите целое число"));
let isNumberPrime = true;

if (N <= 1) {
    document.write("Число меньше <= 1, т.е. не является простым");
} else {
    for (let i = 2; i < N; i++) {
        if (N % i === 0) {
            isNumberPrime = false;
            document.write(`${N} не является простым`);
            break
        }

    }
    if (isNumberPrime) {
        document.write(`Число ${N} является простым`);
    }

}



