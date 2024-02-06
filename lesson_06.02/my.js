//Разновидности сетевых запросов
// fetch("https://jsonplaceholder.typicode.com/posts")
//1. GET - получение данных-прочитать данные,но не менять их
//2. POST - создание новых данных-записать данные
//3. PUT - обновление данных-записать данные
//4. DELETE - удаление данных-удалить данные
//5. PATCH - запрос на изменение данных-изменить данные





//--POST запрос
// let post = {
//     title: "TEST",
//     body: "BODY TEST",
//     userId: 1
// }

// let url = "https://jsonplaceholder.typicode.com/posts"

// fetch(url, {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",       
//     },
//     body: JSON.stringify(post)
  
// })
// .then((res)=>res.json())
// .then((data)=>console.log(data))


//--задание--реализуйте Post запрос,добавив новую toDo задачу.

// https://jsonplaceholder.typicode.com/todos
// Сформируйте данные на ваше усмотрение, выведите ответ от сервера в косноль

// let todo = {
//     userId: 1,
//     title: "ToDo",
//     completed: true
// }

// let url = "https://jsonplaceholder.typicode.com/todos"
// fetch(url, {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",       
//     },
//     body: JSON.stringify(todo)
// })
// .then((res)=>res.json())
// .then((data)=>console.log(data))


//----------------------

// Задание 3
// Напишите функцию getUsers(), которая будет осуществлять запрос по адресу
// http://212.8.247.94:3050/users
// Полученный ответ выведите в косноль

// function getUsers() { 
//     let url = "http://212.8.247.94:3050/users"
//     fetch(url)
//     .then((res)=>res.json())
//     .then((data)=>console.log(data))
// }
// getUsers()


// Задание 4
// Напишите функцию createNewUser(obj), которая будет отправлять POST - запрос с данными нового
// пользователя. Сами данные необходимо передавать как аргумент в виде объекта
// http://212.8.247.94:3050/users/create

//  function createNewUser(obj) {
//      let url = "http://158.160.60.49:3050/users/create"
// let data = {
//     id: 841,
//     name: 'Elena',
//     age: 40,
//     salary: 5000,
//     job_id: 'Student'
// }

//  fetch(url, {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",       
//    },
//     body: JSON.stringify(data)
//  })
//  .then((res)=>res.json())
// .then((data)=>console.log(data))
// }

// createNewUser()

function createNewUser(obj) {
    let url = "http://212.8.247.94:3050/user/create"
    fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",       
       },
       body: JSON.stringify(obj)
    })
    .then((res)=>res.json())
   .then((data)=>console.log(data))
}
let user ={
    name: 'Elena',
    age: 40,
    salary: 5000,
    job_id: 'Student'
}

createNewUser(user)