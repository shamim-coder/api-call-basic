document.getElementById('submit').addEventListener('click', () => {
    const title = document.getElementById('myName').value
    const body = document.getElementById('textarea').value
    
    const myPost = {
        title: title,
        body: body,
        id: 555
    }
    postInfo(myPost)
})

function postInfo(post) {
    fetch('http://dummy.restapiexample.com/api/v1/create', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(() => alert('Page not Found'));
}