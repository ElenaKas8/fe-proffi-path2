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


// async function getProducts() {
//     let url = 'https://dummyjson.com/products';
//     let response = await fetch(url);
//     let data = await response.json();
//     render(data.products);
// }

// function render(data) {
//     for (let elem of data) {
//         const product_card = document.createElement('div');
//         const product_img = document.createElement('img');
//         const product_title = document.createElement('h2');
//         const product_price = document.createElement('p');
        


//         // Здесь устанавливаем классы и текст для каждой карточки продукта
//         product_card.className = 'product_card';
//         product_img.src = elem.thumbnail;
//         product_title.innerText = `Title:${elem.title}`;
//         product_price.innerText = `Price:${elem.price}`;
//         modal_description.innerText = `Description:${elem.description}`

//         // Добавляем изображение, заголовок и цену в карточку продукта
//         product_card.append(product_img, product_title, product_price);

//         // Добавляем карточку продукта в контейнер
//         product_wrapper.append(product_card);

//         product_card.onclick = () => {
//             modal(elem); // Передаем информацию о продукте в функцию modal()
//         }
//     }
// }

// const div_root = document.querySelector('#root');
// const product_wrapper = document.createElement('div');
// product_wrapper.className = 'product_wrapper';
// div_root.appendChild(product_wrapper);


// // Modal-Window

// function modal(product) {
//     const modal_area = document.createElement('div');
//     modal_area.classList = 'modal_area';
//     const modal = document.createElement('div');
//     modal.className = 'modal';

//     // Создаем элементы для отображения информации о продукте
//     const modal_slider = document.createElement('div');
//     const modal_main_img = document.createElement('img');
//     const modal_description = document.createElement('p');

//     modal_slider.className = 'modal_slider';
//     modal_main_img.className = 'modal_main_img';
//     modal_description.className = 'modal_description';

//     // Заполнение слайдера
//     for (let image of product.images) {
//         const slider_image = document.createElement('img');
//         slider_image.src = image;
//         modal_slider.append(slider_image);
//     }

//     // Заполнение главной картинки
//     const main_image = document.createElement('img');
//     main_image.src = product.images[0];
//     modal_main_img.append(main_image);

//     modal.append(modal_slider, modal_main_img, modal_description);
//     modal_area.append(modal);
//     div_root.append(modal_area);
// }

// getProducts();


const div_root = document.querySelector('#root')

const product_wrapper = document.createElement('div')

product_wrapper.className = 'product_wrapper'

div_root.append(product_wrapper)




async function getProducts(){

    let url = 'https://dummyjson.com/products'

    let res = await fetch(url)

    let data = await res.json()

    render(data.products)

}




function render(data){

    for (let elem of data){

        // Создание элементов

        const product_card = document.createElement('div')

        const product_img = document.createElement('img')

        const product_title = document.createElement('h2')

        const product_price = document.createElement('p')




        // Заполнение элементов

        product_card.className = 'product_card'

        product_img.src = elem.thumbnail

        product_title.innerText = `Title: ${elem.title}`

        product_price.innerText = `Price: ${elem.price}`




        // Вставка созданных элементов

        product_card.append(product_img, product_title, product_price)

        product_wrapper.append(product_card)




        product_card.onclick = () => {

            modal(elem)

        }

    }

}




function modal(item) {
    // Modal area
    const modal_area = document.createElement('div');
    modal_area.classList = 'modal_area';
    // Modal container
    const modal = document.createElement('div');
    modal.className = 'modal';

    // Создание контейнеров 
    const modal_slider = document.createElement('div');
    const modal_main_img = document.createElement('div');
    const modal_description = document.createElement('div');

    modal_slider.className = 'modal_slider';
    modal_main_img.className = 'modal_main_img';
    modal_description.className = 'modal_description';

    // Заполнение слайдера
    for (let image of item.images){
        const slider_image = document.createElement('img');
        slider_image.src = image;
        modal_slider.append(slider_image);
    }

    // Заполнение главной картинки
    const main_image = document.createElement('img');
    main_image.src = item.images[0];
    modal_main_img.append(main_image);

    // Создаем параграфы для каждой характеристики продукта
    const nameParagraph = document.createElement('p');
    nameParagraph.innerText = `Name: ${item.title}`;
    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.innerText = `Description: ${item.description}`;
    const priceParagraph = document.createElement('p');
    priceParagraph.innerText = `Price: ${item.price}`;
    const ratingParagraph = document.createElement('p');
    ratingParagraph.innerText = `Rating: ${item.rating}`;

    // Добавляем параграфы в контейнер modal_description
    modal_description.append(nameParagraph, descriptionParagraph, priceParagraph, ratingParagraph);

    // Добавляем контейнеры в модальное окно
    modal.append(modal_slider, modal_main_img, modal_description);
    modal_area.append(modal);
    div_root.append(modal_area);
}





getProducts()




// ДЗ 

// 1) 

// Разобрать код, если что-то не понятно - задать обязательно вопросы

// 2)

// В контейнере modal_description сформируйте параграфы, где опишите: 

// Имя продукта, описание, стоимость и рейтинг

