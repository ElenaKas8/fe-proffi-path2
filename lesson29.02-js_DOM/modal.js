//1.Получение данных используя сетевой запрос
//
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);
// const div_root = document.querySelector('#root')
// const product_wrapper = document.createElement('div')
//  product_wrapper.className= 'product_wrapper'
// div_root.appendChild(product_wrapper)

// //4-В product_wrapper будем добавлять карточки
// //
// async function getProducts(){
//     let url = 'https://dummyjson.com/products'
//     let response = await fetch(url)
//     let data = await response.json()
//    render(data.products)
// }
// // 2-создаем элементы
// //  getProducts()

// function render(data){
//     for (let elem of data){
//         const product_card = document.createElement('div')
//         const product_img = document.createElement('img')
//         const product_title = document.createElement('h2')
//         const product_price = document.createElement('p')
//     }

// }

// //3-Заполнение элементов

// product_card.className = 'product_card'
// product_img.src = elem.thumbnail
// product_title.innerText = elem.title
// product_price.innerText = elem.price

// //5-теперь вставляем созданных элементов  produ

// product_card.append(product_img, product_title, product_price)
// product_wrapper.append(product_card)


async function getProducts() {
    let url = 'https://dummyjson.com/products';
    let response = await fetch(url);
    let data = await response.json();
    render(data.products);
}

function render(data) {
    for (let elem of data) {
        const product_card = document.createElement('div');
        const product_img = document.createElement('img');
        const product_title = document.createElement('h2');
        const product_price = document.createElement('p');

        // Здесь устанавливаем классы и текст для каждой карточки продукта
        product_card.className = 'product_card';
        product_img.src = elem.thumbnail;
        product_title.innerText = `Title:${elem.title}`;
        product_price.innerText = `Price:${elem.price}`;

        // Добавляем изображение, заголовок и цену в карточку продукта
        product_card.append(product_img, product_title, product_price);

        // Добавляем карточку продукта в контейнер
        product_wrapper.append(product_card);
    }
}

const div_root = document.querySelector('#root');
const product_wrapper = document.createElement('div');
product_wrapper.className = 'product_wrapper';
div_root.appendChild(product_wrapper);

getProducts();


