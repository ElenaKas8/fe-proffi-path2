//--метод thits-потеря контексата-не работает со стрелочной функцией
//--bind--не работает со стрелочной функцией
//--call--не работает со стрелочной функцией
//--apply--не работает со стрелочной функцией-принимает массив аргументов

// let obj = {
//     a: 10
// }

// obj.b = function(){
//     console.log(this)
// }


// Задача 1
// Привяжите контекст this функции carInfo к объекту car.
// создайте новую функцию с привязанным контекстом

let car = {
    model: 'Tesla',
    color: 'red'
}


function carInfo(){
    console.log(`${this.model} ${this.color}`)
}

let carInfo2 = carInfo.bind(car)
carInfo2()

// Задача 2
// Привяжите контекст метода emplInfo к объекту empl2
// Выполните привязку таким образом, чтобы метод сразу выполнился

let empl1 = {
    name: 'John',
    age: 20,
    emplInfo: function(salary, job_id){
        console.log(`${this.name} ${this.age} ${salary} ${job_id}`)
    }
}

let empl2 = {
    name: 'Wilyam',
    age: 35
}

let emplInfo = empl1.emplInfo.bind(empl2)

emplInfo(100, 'IT')




// emplInfo(100, 'IT') => Wylliam 35 100 'IT'

