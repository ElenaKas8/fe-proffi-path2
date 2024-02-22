//Статические свойства и методы
// class Contacts {
//     constructor(phone) {
//         this.phone = phone
        
//     };
//     getPhone() {
//         console.log(this.phone);
//     }
//     }

    

//     //Статический метод

//     let contact = new Contacts(123)
//     Contacts.staticMethod()


//     //классы со статическтми методами - 

// //1 class let Date = new Date()
// date.getTime()
// Date.now()

// //2 class - Object
// Object.values()
// Object.keys()
// Object.entries()// возвращает массив элементов
// //возвращают массив ключей и значений объекта

// class Mail{
//     static method(a){
//         return a**2
//     }
// }

// let result = Mail.method(10)
// console.log('result', result);



// let obj = {
//     name: 'Alex',
//     age: 25,
//     isJob: true,
// }


// // ключ объекта.Значение свойства объекта
// for (let key in obj) {
//    console.log('key', key);
   
//     //   console.log(obj[key]);
// }



// Задача 1
// Реалзуейте статический метод values(obj) к классу Object2, который будет 
// полностью дублировать логику работы метода Object.values(obj). 
// Допущение: методы класса Object в решении использовать нельзя

let obj = {
    name: 'Alex',
    age: 40,
    isJob: true
}

console.log(Object.values(obj))


 class Object2 {
    static values(obj) {

        let arr = []
        for (let key in obj) {
            arr.push(obj[key])
        }
        return arr
    }

    }
//Metod entries-возвращает массив и ключей и значений объекта

// static entries(obj) {
//     let arr = []
//     for (let key in obj) {
//         arr.push([key, obj[key]])
//     }
// }
// Metod keys-возвращает массив ключей объекта

// static keys(obj) {
//     let arr = []
//     for (let key in obj) {
//         arr.push(key)
//     }
// }
