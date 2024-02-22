//Getter-setter-свойства аксессоры

// getter-метод клторый позволяет прочитать свойство объекта при обращении к нему
//на основе геттера нелься получать и передавать аргументы
//значение геттера перезаписать невозможно
// в случае изменения свойств такие как имя и порода,ключевое свойство ретерн вернет актуальное значение

let pet = {
    name: 'Sharik',
    breed: 'Husky',
    get nameBreed(){
        // return this.name + ' ' + this.breed
        return `${pet.name} ${pet.breed}`	
    }
       
    }
pet.nameBreed = 'Husky'
console.log(pet.nameBreed);


//--------------Практическое применение

// let string = {
//     value:'Some string',
//     get length(){
//         let count=0
//         for (let elem of string.value){
//             count++
//         }
//         return count
            
//         }
//     }

//     string.value = 'Some new string'
//  console.log(string.length);


//------------Setter-метод,который позволяет переопределить свойство 
//объекта-позволяют работать очень удобно с приватными свойствами
// settr должен всегда получать один аргумент(1-не больше ни меньше)
//retern нельзя использовать
//можно делать логику объекта в сеттер

// let number = {
//     value: 5,
//     set setNumber(arg){
//         if (targ>50){
//             this.value = arg
//         }
//         else {
//             this.value = arg**2
//         }
//     },
//     }
// number.setNumber = 10


//--------------------применение getter и setter

class User{
    conctructor(name, role, lvl){
        this.name = name
        this.role = role
        this.lvl = lvl
    }
    get getInfo(){
        return (`Name: ${this.name} Role: ${this.role} Lvl: ${this.lvl}`);
        
    }
    set setYear(arg){
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        this.year = currentYear - age
    }
}

let user1 = new User("Alex", "Admin", 10)
user1.setYear = 20
console.log(user1.getInfo);
//


//----------------------
//  приватные метооды и свойства-это не статические методы
//сам класс не может получить доступ к приватным свойствам


class card{
    constructor(name_owner, card_number, exp_month, exp_year, cvc){
        this.name_owner = name_owner
        this.card_number = card_number
        this.exp_month = exp_month
        this.exp_year = exp_year
        this.cvc = cvc
    }
    get cardInfo(){
        return (`Name owner: ${this.name_owner} Card number: ${this.card_number} Exp month: ${this.exp_month} Exp year: ${this.exp_year} Cvc: ${this.cvc}`);
    }

}





