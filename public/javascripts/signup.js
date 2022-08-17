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
            console.log('Successful');
            window.location.replace('/');
        } else {
            alert('This username already exists, and/or your username or password fail to meet our criteria.\n\nUsername Length: Minimum of 5\nPassword Length: Between 7 to 20');
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);