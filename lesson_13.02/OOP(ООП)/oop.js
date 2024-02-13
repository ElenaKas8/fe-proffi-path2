// let user1 = {
//     name:"Alex",
//     role:"Admin",
//     lvl:10,
//     getInfo(){
//         console.log(`Name: ${user1.name} Role: ${user1.role} Lvl: ${user1.lvl}`); 
//     },
   
//     }



// let user2= {
//     name:"Willyam",
//     role:"Support",
//     lvl:4,
//     getInfo(){
//         console.log(`Name: ${user2.name} Role: ${user2.role} Lvl: ${user2.lvl}`); 
//     },
   
//     }

    //Classy-Решение через классы-шабльнизаторы объектов

    class User {
        constructor(name, role, lvl){
            this.name = name
            this.role = role
            this.lvl = lvl
        }
        getInfo(){
            console.log(`Name: ${this.name} Role: ${this.role} Lvl: ${this.lvl}`);
        }
    }

let user1 = new User("Alex", "Admin", 10)
let user2 = new User("Willyam", "Support", 4)

console.log(user1);
console.log(user2);

// user1.getInfo()
// user2.getInfo()