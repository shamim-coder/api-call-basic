fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => userNames(json))



function userNames(users) {
    const ulName = document.getElementById('user-container')
    const ulUser = document.getElementById('username-container')
    users.map((user) => {
        const li = document.createElement('li')
        li.innerText = user.name
        ulName.appendChild(li)
    })
    users.map((user) => {
        const li = document.createElement('li')
        li.innerText = user.email
        ulUser.appendChild(li)
    })
}



