window.addEventListener('load', function () {

    const postList = document.getElementById('postList');
    const fetchButton = document.getElementById('fetchButton');
    const postButton = document.getElementById('submitButton')
    const titleInput = document.getElementById('titleInput');
    const bodyInput = document.getElementById('bodyInput');
    const postForm = document.getElementById('postForm');



    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
        response.json().then((data) => {
            const thisBreak = document.createElement('br');

            fetchButton.addEventListener('click', () => {

                postList.appendChild(thisBreak);

                for (let i = 0; i < data.length; i++) {
                    postList.innerHTML += `Title: ${data[i].title}`
                    postList.appendChild(thisBreak);
                    postList.innerHTML += `Body: ${data[i].body}`;
                    postList.appendChild(thisBreak);
                }
            })

            postButton.addEventListener('click', () => {
                const titleOutput = document.createElement('div');
                const bodyOutput = document.createElement('div');
                titleOutput.textContent = `Title: ${titleInput.value.trim()}`;
                postForm.appendChild(titleOutput)
                titleOutput.textContent = `Body: ${bodyInput.value.trim()}`;
                postForm.appendChild(bodyOutput)
                
            })


        })

        // fetch("https://jsonplaceholder.typicode.com/posts", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({

        //     })

        // }).then((response) => response.json()).then((data) => console.log(data)).catch(error => console.log('Error: ', error));



    })
    
})

