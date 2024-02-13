
//Construction-async-await (асинхронный код-синтаксический сахар-упрощение кода)
//Аргумент заменяется на переменную,затем обязательно указывается await 
//Есть ограничения: 
// async function getUsers() { 
//     let url = "http://212.8.247.94:3050/users"
//     let response = await fetch(url)
//     let data = await response.json()
//     console.log(data)

// }
 
// вариант старые с синтаксисом 

//  function getUsers() { 
//     let url = "http://212.8.247.94:3050/users"
//  fetch(url)
//  .then((res)=>res.json())
//  .then((data)=>console.log(data))
// }
// getUsers()


// Задание 1
// Используя async/await реализуйте сетевой GET запрос 
// https://jsonplaceholder.typicode.com/posts
// В косноль вывести массив только с четными постами

// async function getPosts() {
//     let url = "https://jsonplaceholder.typicode.com/posts"
//     let response = await fetch(url)
//     let data = await response.json()
//     console.log(data.filter(elem => elem.id % 2 === 0))
// }
// getPosts()

//Пр мер оюботки с ошибками


// async function getUsers() { 
//           
//     
//let url = "http://212.8.247.94:3050/users"
//      try { 
    //let response = await fetch(url)
//      let data = await response.json()
//      console.log(data)
// } catch (error) {
//     console.log(error)
// }
// }
// getUsers()

// Задание 2
// Перепиште функцию ниже используя async/await, учитывая логику работы метода catch
async function createNewUser(obj){  
    let url = 'http://212.8.247.94:3050/user/create'
    fetch(url, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj)

    })
    try{let data = await response.json()
    console.log(data)
}
catch (error){
    console.log(error)
}}

createNewUser({name: 'Helen', age: 30})
