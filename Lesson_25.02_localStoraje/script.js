//Object LocalStorage
//механизмы работы с объектами

// let obj = {
//     name: 'Alex',
//     age: 25
// }
// localStorage.setItem("key",JSON.stringify(obj))
// console.log(JSON.parse(localStorage.getItem("key")));

// Задача 
// Имеется строка со структурой массива. 
// Используя объект JSON преобразуйте данную строку в массив, добавьте в нее 
// еще пару чисел (80,90) и преобразуйте обратно в строку.

//  let string = '[20,50,60,70]'


//  let arr = JSON.parse(string)
//  arr.push(80,90)
//  string = JSON.stringify(arr)
//  console.log(string);
// Результат: 
// '[20,50,60,70,80,90]'

///-------------Task
// Опишите две функции: writeLocalStorage(obj) и readLocalStorage(). 
// Функции должны записывать или считывать объекты в localStorage соответственно.
// writeLocalStorage должен в качестве аргумента получить объект
// readLocalStorage должен в консоль вернуть сам ОБЪЕКТ из LS

// function writeLocalStorage(obj){
//     localStorage.setItem("key",JSON.stringify(obj))
// }
// function readLocalStorage(){
//     console.log(JSON.parse(localStorage.getItem("key")));
// }
