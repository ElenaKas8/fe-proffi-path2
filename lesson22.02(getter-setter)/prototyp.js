//prototype
//свойства и методы в js
//proto -свойство, которое существует у каждого обїекта и которое


// let string = "Hallo World"
// console.log(string.__proto__.__proto__);//вызываем родителя объекта

// console.log(string.toString());//вызываем методы
//  String.prototype.toUpperCase()
// console.log(string.toUpperCase());


// Array.prototype.abs =function(){
//     return Math.abs(this[0]-this[this.length-1])
// }
// let array = [10,50,5,11,15]
// console.log(array.abs())

//метод initCap()

// Задача 1

// Добавьте к классу String новый метод initCap(), который будет возводить в верхний регистр первую букву, 
// а другие оставшиейся символы в нижний регистр
// Метод должен вернуть новую строку

// String.prototype.initCap = function(){
//     for (let i = 0; i < this.length; i++){
//         if (i === 0){
//             this[i] = this[i].toUpperCase()

//         }
//         else {
//             this[i] = this[i].toLowerCase()
//         }
//     }
//     return this


    
// }
// console.log('string'.initCap());



// String.prototype.initCap = function() {
//     return this[0].toUpperCase() + this.slice(1).toLowerCase();
// };
// let str ="fxbnagdnNDgh"
// console.log(str.initCap());


// 'string' => 'String'
// 'STRING' => 'String'
// 'StRiNg' => 'String'

//////------------Constructor
class Person {
    constructor(name, age){
        this.name = name;   
        this.age = age;

    }
    
     
}

class Stack{
    constructor (){
        this.stack = [];
    }

     push(){
        return this.stack.push()

    }
    
}
let stack = new Stack()

console.log(stack.stack);