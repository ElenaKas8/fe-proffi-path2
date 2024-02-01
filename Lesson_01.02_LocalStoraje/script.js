
// https://jsonplaceholder.typicode.com/

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

//promises-catch()

//catch() -вызывается когда проммис перейдет в состояние rejected
//then() -вызывается когда проммис перейдет в состояние resolved


// new Promise((resolve, reject) => {
    
//     setTimeout(()=>{
//         console.log("generated array");
//         reject("error")
//     },Math.random()*1000);
// })
// .then(()=> console.log("generated array2"))
// .catch((a)=> console.log(a))

   

// Задание 1. 
// Задан фрагмент асинхронного кода, который спустя 0.4 секунд
// формирует массив. 
// Необходимо реализовать процесс, который дождется выполнения 
// асихнронного кода и выведет сумму всех элементов массива
// Примечание: расчет суммы внутри задержки делать нельзя -использовать promises



// let promise = new Promise((resolve, reject) => {

//     setTimeout(()=>{
//         console.log("generated array");
//         let array = [1,2,3,4,5]
//         resolve(array)
//     },400);
// })

// promise.then((array)=>{
//     let sum = array.reduce((acum,elem) => acum + elem,0)
//     console.log(sum) 
// })


// Задание 2. 
// Задан фрагмент асинхронного кода, который спустя 0.5 секунд
// рандомным образом создает переменную number. Релизуйте процесс, который
// в случае если число окажется нечетным - вернет текст ошибки 'error'. 
// Если число окажется четным - тогда значение квадрата этого рандомного числа
// Примечание: Логи внутри задержки делать нельзя

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let number = Math.round(Math.random() * 10);
//         if (number % 2 === 0) {
//             resolve(number);
//         } else {
//             reject("error");
//         }
//     }, 500);
// });

// promise2
//     .then(number => {
//         console.log(number ** 2);
//     })
//     .catch(error => {
//         console.error( error);
//     })
//     .finally(() => {
//         console.log("finally");
//     });

    //finally() -вызывается когда проммис перейдет в состояние resolved или rejected-выполняется в любом случае


// fetch-инструмент формирования HTTP запросов-возвращает промис


// let url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
// .then((res)=>res.json())
// .then((data)=>{
//     let names = data.map(elem => elem.name)
//     console.log(names)
// }
// )

// Задание 1
// Реализуйте сетевой запрос по адресу 
// https://jsonplaceholder.typicode.com/todos
// Получиче список выполненных задач в консоль.


let url = "https://jsonplaceholder.typicode.com/todos"
fetch(url)
.then((res)=>res.json())
.then((data)=>{
    let completed = data.filter(elem => elem.completed)
    console.log(completed)
})
    