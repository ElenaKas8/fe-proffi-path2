//DZ Задача 1     Изменить все сетевый функции используя async/await
// * Задача 2   Вместо карточек рализовать таблицу в разметке 

// https://www.w3schools.com/tags/tag_table.asp
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics


//constructor - конструктор-внутри крласса создает экземпляр
//шаблон-это тожесамое что и класс.addEventListener('
//экземпляр-это объект

// class User{
//     constructor(name, role, lvl){
//         this.name = name
//         this.role = role
//         this.lvl = lvl
//     }
//     getInfo(){
//         console.log(`Name: ${this.name} Role: ${this.role} Lvl: ${this.lvl}`);
//     }
//     changeName(newName){
//         this.name = newName

//     }
// }
// let user1= new User("Alex", "Admin", 10)
// let user2 = new User("Willyam", "Support", 4)

// user1.changeName("Alexey")
// user2.changeName("Willy")
// console.log(user1);
// console.log(user2);


//Task1

//// Задача 1
// Напишите класс MathNumb, который будет внутри экземпляров формировать сво-во number с числовым значением
// Напишите метод getDuble(),
// который будет выводить в косноль квадрат сво-ва number.

class MathNumb{
    constructor(number){
        this.number = number
    }
    getDuble(){
        console.log(this.number**2);

        
    }

    setQuadNumber(){
        this.number = this.number**4
    }

        
    }
    let numb1 = new MathNumb(5)
    let numb2 = new MathNumb(7)

    numb1.setQuadNumber()
    numb2.setQuadNumber()
    
    numb1.getDuble()
    numb2.getDuble()


// Наследование

class Auto {
    constructor(modal, year){
        this.modal = modal
        this.year = year
        this.speed = 0
    }

    driving(speed){
        this.speed = speed
        console.log(`Auto ${this.modal} разогналась до  ${this.speed} км/ч`);
    }

    parking(){
        this.speed = 0
        console.log(`Auto ${this.modal} остановилась`);
    }
}

let tesla = new Auto("Tesla", "2020")
tesla.driving(100)
tesla.parking()

console.log(tesla);








    

    
    // Задача 2
    // Напишите еще один метод setQuadNumber, 
    //который бдует возводить число в 4 степень и переопределять сво-ва number
    
    
    
//Наследование происходит благодаря оператору extends с указанием имя наследуемого класса



class SuperCar extends Auto{
    constructor(modal, year){
        super(modal, year)
        this.lights = true
    }   

    setLights(){
        this.lights = !this.lights
        console.log(`Auto ${this.modal} ${this.lights ? "включил" : "выключил"} фары`);
    }
}

let toyota = new SuperCar("Toyota", "2021")

toyota.setLights()
// toyota.setLights()

console.log(toyota);
// toyota.driving(100)
// toyota.parking()

