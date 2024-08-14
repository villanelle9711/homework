// const users = [
//     {
//         name: 'Alex',
//         age: '26',
//         isAdmin: false
//     },
//     {
//         name: 'Yana',
//         age: '25',
//         isAdmin: true
//     }
// ]

// users.push({
//     name: 'Oksana',
//     age: '30',
//     isAdmin: true
// }
// )

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i])
// }

// const foo = 'hello world'
// console.log(foo.toUpperCase())

// ===================================================================================================================================================

// ДОМАШКА 83 УРОК 

// 1) Создайте объект с вашим описанием(имя, возраст и т.д.).

// const user = {
//     name: 'Yana',
//     age: 26,
//     profession: 'Junior Frontend Developer',
//     hobbies: ['sport', 'travel', 'games'],
//     myGoal: 'Become a senior frontend developer'
// }

// console.log(user)

// 2) Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.

const user = {
    name: 'Yana',
    age: 26,
    salute: function (name) {
        return `Hello, ${name}!`
    }
}

console.log(user.salute('Yana'))

// 3) Создайте массив объектов с описанием пользователей(такой мы делали в уроке). Объявите отдельную переменную, в которой будет храниться количество простых пользователей, начальное значение будет - 0. Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу. После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.

const users = [
    {
        name: 'Yana',
        age: 26,
        isAdmin: true
    },
    {
        name: 'Oksana',
        age: 30,
        isAdmin: false
    },
    {
        name: 'Alex',
        age: 15,
        isAdmin: false
    },
    {
        name: 'Nina',
        age: 42,
        isAdmin: false
    },
    {
        name: 'Rita',
        age: 20,
        isAdmin: true
    },
    {
        name: 'Irina',
        age: 25,
        isAdmin: false
    }
]

let simpleUsers = 0

for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) { 
        simpleUsers++
    }
}

console.log('Количество простых пользователей', simpleUsers)

