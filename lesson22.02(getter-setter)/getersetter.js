//Getter-setter-acsessors
//MAKET https://www.figma.com/file/sicu3MPWiWYhmzlbO10hwB/grid-with-buttons?type=design&node-id=0-1&mode=design&t=LfUxdJ0LuFzqNXPb-0


// Задача 2
// К указанному ниже объеуту реализуйте геттер fullName, который 
// будет хранить значение имени и фамилии человека
 
// let human = {
//     firstname: 'Steven',
//     lastname: 'Willyam',
   

//    get fullName(){
//     return `${human.firstname} ${human.lastname}`
// }

// }

// console.log(human.fullName)

// Также реализуйте сеттер setFullName, который будет получать строку с именем  и фамилией
// например: 'Alex King'
// Сеттер должен будет переопределить сво-во firsname и lastname

// let human = {
//     firstname: 'Steven',
//     lastname: 'Willyam',

//    set setFullName(name){

//        let [firstname, lastname] = name.split(' ')
    
//        this.firstname = firstname
//        this.lastname = lastname
//     }
// }
    
// human.setFullName = 'Alex King'
// console.log('human',human);



//----------------------------------------------------------------------------------------
// Задача 3
// Задан объет с сво-вом numbers
// Напишите сеттер setNumbers, который в качестве аргумента будет получать СТРОКУ с элементами, которые 
// должны оказаться в массиве по следующему примеру:


// let obj = {
//    numbers: ['Один', "Два", "Три", "Четыре", "Пять"],

//    set setNumbers (arg){
//        let [first, ...rest] = arg.split(' ')

// console.log(first, rest)
//    }

// }




//  obj.setNumbers = '1 2 3 4'
//  obj.numbers => ['1', '2', '3', '4']

// obj.setNumbers = 'велосипед телевизоп'
// obj.numbers => ['велосипед', 'телевизоп']


//----------------

// Задача 4
// К ниже описанному объекту реализуйте геттер, который бужет хранить сумму 
// всеъ элементов массива



// В этом же объекте реализуйте сеттер setNumbers, который будет формировать новый массив
// c значениями от 1 до указанного значения включительно после знака равенства
// obj.setNumbers = 10
// [1,2,3,4,5,7,8,9,10]
// 

let obj = {
    numbers: [10,50,5,11,15],
//     get sum(){
//         return obj.numbers.reduce((acc,el)=> acc+el,0)
//     },
//   get abs(){
//     return Math.abs(obj.numbers[0]-obj.numbers[obj.numbers.length-1])
//   },

// В этом же объекте реализуйте сеттер setNumbers, который будет формировать новый массив
// c значениями от 1 до указанного значения включительно после знака равенства
// obj.setNumbers = 10
// [1,2,3,4,5,7,8,9,10]
// 
  set setNumbers(arg){
    let arr = []
    for (let i = 1; i <= arg; i++){
        arr.push(i)
    }
    obj.numbers = arr

arr.setNumbers = 11
console.log( obj.numbers);

  }
  
}