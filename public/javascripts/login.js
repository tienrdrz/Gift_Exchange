async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    console.log(username, password);

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type' : 'application/json'}
        });
        console.log(response);
        
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Username and/or password is incorrect');
        }
    }
    else {
        alert('Missing username or password');
        return;
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);