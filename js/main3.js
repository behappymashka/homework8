//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let N = parseInt(prompt("Введите целое число"));
for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        document.write(`<p>${i}</p> `)
    }
}
