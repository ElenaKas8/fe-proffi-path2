// 1 Задание 
// Сформируйте карточки для каждого пользователя используя функцию рендер
// Необходимо софрмировать сетевой запрос в виде функции, функцию render необходимо 
// вызвать с сететвого запроса

// 3 Задание
// После нажати на submit реализуйте пост запрос, который учтет данные с формы 
// для добавления нового юзера в бэкенд

let users_wrapper = document.querySelector('.users_wrapper')
let add_form = document.querySelector('.add_form')


// add_form.onsubmit = (e) => {
//     e.preventDefault()
//     let form_data = new FormData(add_form)
//     let data = Object.fromEntries(form_data)
//     console.log(data)
// }

// Обработчик формы
add_form.addEventListener('submit', (e) => {
    e.preventDefault()
    let form_data = new FormData(add_form)
    let data = Object.fromEntries(form_data)
    createNewUser(data)
    console.log(data)
})


// Сетевые запросы 
function getUsers(){
    let url = 'http://212.8.247.94:3050/users'
    fetch(url)
        .then(res => res.json())
        .then(data => render(data))
}

function createNewUser(obj){
    let url = 'http://212.8.247.94:3050/user/create'
    fetch(url, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            getUsers()
        })
        .catch(e => console.log(e))
}

// Рендер карточек
function render(array){
    users_wrapper.innerHTML = ''
    for (let elem of array.reverse()){
        let div_card = document.createElement('div')
        let h_name = document.createElement('h2')
        let p_age = document.createElement('p')
        let p_job_salary = document.createElement('p')
        let p_id = document.createElement('p')

        div_card.className = 'user_card'
        h_name.innerText = elem.name
        p_age.innerText = 'Age: ' + elem.age
        p_job_salary.innerText = `Job: ${elem.job_id}, Salary: ${elem.salary}`
        p_id.innerText = 'ID: '+elem.id
        
        div_card.append(h_name, p_age, p_job_salary, p_id)
        users_wrapper.append(div_card)
    }
}

getUsers()

//DZ-реализоапть еще 2 формі-Delete,Update






//-------------------
// let delete_form = document.querySelector('.delete_form');

// delete_form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     let userId = document.querySelector('input[name="user_id"]').value;
//     console.log(userId);
    
//     deleteUser(userId);
// });

// let update_form = document.querySelector('.update_form');

// update_form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     let formData = new FormData(this);
//     let obj = {};
//     formData.forEach((value, key) => {
//         obj[key] = value;
//     });
//     updateUser(obj);
// });

// function deleteUser(userId) {
//     let url = `http://212.8.247.94:3050/user/delete/${userId}`;
//     fetch(url, {
//         method: 'DELETE'
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         getUsers();
//     })
//     .catch(e => console.log(e));
// }




function updateUser(obj) {
    let userId = obj.id;
    delete obj.id; // Удаляем поле ID из объекта, так как оно не должно быть в теле запроса
    let url = `http://212.8.247.94:3050/user/update/${userId}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        getUsers();
    })
    .catch(e => console.log(e));
}
