// function sunNumbers() {
//     return firstNumber + secondNumber
// }

// const result = sunNumbers(3, 10)
// console.log(result)
// console.log(sunNumbers(-2, 2))

// =================================================================

// const users = ['John', 'Ann', 'Alex', 'Max']
// const numbers = [1, 2, 3]

// function checkForCopyItem(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return 'There is no such item in the array'
// }

// console.log(checkForCopyItem(numbers, 5))

// Стрелочная функция 

// const users = ['John', 'Ann', 'Alex', 'Max']
// const numbers = [1, 2, 3]

// const checkForCopyItem = (array, item) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return 'There is no such item in the array'
// }

// console.log(checkForCopyItem(numbers, 5))

// =======================================================================================================================================

// ДОМАШНЯЯ РАБОТА 

// 1) Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’.

function greet(Iana) {
    return 'Hello ' + 'Iana'
}

let userName = 'Iana'
console.log(greet(userName))

// 2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел. Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.

let numbers = [1, 27, 3, 12, 6]

function findMoreNumbers(arrayOfNumbers) {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] > 10) {
            console.log(arrayOfNumbers[i])
        }
    }
}

findMoreNumbers(numbers)

// 3) Задача создать калькулятор 


// =====================================================================================================

function calculator(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2
    } else if (operator === '-') {
        return num1 - num2
    } else if (operator === '*') {
        return num1 * num2 
    } else if (operator === '/') {
        if (num2 === 0) {
            return 'Деление на ноль невозможно'
        } else {
            return num1 / num2
        }
    } else {
        return 'Неизвестная операция'
    }
}

let result = calculator(6, 2, '-')
console.log(result)

result = calculator(7, 3, '+')
console.log(result)

result = calculator(3, 2, '*')
console.log(result)

result = calculator(9, 0, '/')
console.log(result)

result = calculator(10, 2, '/')
console.log(result)