async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type' : 'application/json'}
        });
        if (response.ok) {
            document.location.replace('/login');
        } else {
            alert('This username already exists!');
            return;
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);