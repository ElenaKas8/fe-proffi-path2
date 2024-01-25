//Practica

let data = [
    {id: 1, title: 'Велосипед', price: 15000},
    {id: 2, title: 'Самокат', price: 2000},
    {id: 3, title: 'Ноутбук', price: 30000},
    {id: 4, title: 'Стол', price: 10000},
    {id: 5, title: 'Телевизор', price: 23000},
]

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

//удалить продукт



function render(array){

    div_products.innerHTML = ""
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