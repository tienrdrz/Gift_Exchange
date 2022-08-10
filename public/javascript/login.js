function loginFormHandler(event) {
    event.preventDefault();

    const firstname = document.querySelector('#first-name-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (firstname && password) {
        fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                first_name,
                password
            }),
            headers: { 'Content-Type' : 'application/json'}
        }).then((response) => {console.log(response)})
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);