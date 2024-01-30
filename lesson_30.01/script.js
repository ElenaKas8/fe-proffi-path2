//asinc-ассинхронный код-это код,которому требуется время на выполнение

//js фактически не дожидается выполнения кода

//Promises

// setTimeout(()=>{
//     console.log(1);
//     let a =[1,2,3,4,5,6,7,8,9,10];
// },3000)

// console.log(2);

// console.log(3);

//порядок выполнения кода
// 2
// 3
// 1

//другой пример

// setTimeout(()=>{
//     console.log("code 1");
// },Math.random()*1000);

// setTimeout(()=>{
//     console.log("code 2");
// },Math.random()*1000);

//гарантировать порядок выполнения команд
//code 1
//code 2

//!!!пример-вложенность

// setTimeout(() => {
//   console.log("code 1");

//   setTimeout(() => {
//     console.log("code 2");
//     console.log("code 3");
//   }, Math.random() * 1000);
// }, Math.random() * 1000);

//--object promise-позволяет обернуть наш код в функцию и позволяет избавиться от вложенности,и гарантировать порядок выполнения процессов,минуя вложенность

// pending - ожидание
//resolved (fulfilled)- выполнено
//rejected - отклонено

// В Promise помещается только ассинхронная часть кода,иначе в нем смысла нет

// let promise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//            console.log("generated array(code 1)");
//            let a =[1,2,3,4,5,6,7,8,9,10];
//              resolve(a)
//         //    reject()
//          },Math.random()*1000);
// })

//-метод проммиса then-дожидается,пока проммис перейдет в состояние resolved и дальше
// выполняет код
//---у проммиса может быть реализована цепочка вызовов методов then
//--return -выход из проммиса

// promise.then((a)=>{
//     console.log(a,"code 2");
//     a.push(5)
//     return a
// }).then(( a)=> {
//     console.log(a,"code 3")
// })

// metod fetch-позволяет получить данные с сервера в виде объекта

// console.log(fetch());

//реализация двух запросов без вложенности

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("code 1");
        
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    resolve(a);
  }, Math.random() * 1000);
})
  .then((a) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(a, "code 2");
        f.push(5);
        resolve(a);
      }, Math.random() * 1000);
    })
  })
  .then((a) => {
    console.log(a, "finish(code 3) ");
  })
