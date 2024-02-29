// Задача 2
// Реалиузйте в классе Array метод sum(), который будет возвращать сумму всех элементов массива
// let array = [1,2,3,4,5]

// Array.prototype.sum = function(){
//     return this.reduce((acc,el)=> acc+el,0)
// }

// console.log(array.sum())

//-----Task 3--concatWS
// Задача 3
// Реализуйте в классе Array метод concatWS(s). Метод должен формировать из массива строку, 
// помещая между каждым элементов значение указанного разделителя

 let array = [1,2,3,4,5,6]

Array.prototype.concatWS = function(s){
    return this.join(s)

}

console.log(array.concatWS('-'))


// array.concatWS('-') => '1-2-3-4-5-6'

//---Window-это глобальный js объект,который хранит прикладной интерфейс браузера-allert,confirm,prompt 
// и т.д.location,history,....
