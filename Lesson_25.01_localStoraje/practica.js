//Practica

let default_data =  [
    {id: 1, title: 'Велосипед', price: 15000},
    {id: 2, title: 'Самокат', price: 2000},
    {id: 3, title: 'Ноутбук', price: 30000},
    {id: 4, title: 'Стол', price: 10000},
    {id: 5, title: 'Телевизор', price: 23000},
]

let data = JSON.parse(localStorage.getItem("product")) ?? default_data;

let div_products = document.querySelector(".product_wrapper")

let add_form = document.querySelector(".add_form")

add_form.onsubmit =(event)=>{
   event.preventDefault()   
    let form_data = new FormData(event.target)
    let inp_data = Object.fromEntries(form_data)
    addNewProduct(inp_data)
}

//добавить новый продукт
function addNewProduct(info){ 
    data.push({...info,id:Date.now()})
    render(data)
}

//Сохранение данных в наш массив

function toLocalStorage (obj){
    localStorage.setItem("product",JSON.stringify(obj))
}
//удалить продукт



function render(array){
    div_products.innerHTML = ""
    toLocalStorage(data)
for (let elem of array) {
    let div_card = document.createElement("div")
    let h_title = document.createElement("h2")
    let p_price = document.createElement("p")

    div_card.className = "card"
    h_title.innerText = elem.title
    p_price.innerText = elem.price

    div_card.append(h_title,p_price)
    div_products.append(div_card)
}
}

render (data)

/// Домашнее задание
// 1) Реализовать новую форму, которая будет включать инпут, по которому необходимо реализовать удаление товара
// В инпут необходимо передать значение ID товара и после нажатия товар должен быть удален на стороне разметки.

let remove_form = document.querySelector(".remove_form")

let input = remove_form.querySelector("input")

remove_form.onsubmit = (event)=>{
    event.preventDefault()
    let form_data = new FormData(event.target)
    let inp_data = Object.fromEntries(form_data)
    removeProduct(inp_data)
}
let remove_btn = remove_form.querySelector("button")

function removeProduct(info){

    data = data.filter(elem => elem.id != info.id)
    
    render(data)
}




//реализовать чтение данных из LocalStorage в момент обновления страницы

