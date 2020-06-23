let registrationBtn = document.getElementById('registration-btn');
registrationBtn.addEventListener('click', register);

async function register() {
    try {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        let userData = {
            name,
            email,
            password,
        };

        let url = `https://5ef168bf1faf160016b4d5a9.mockapi.io/api/users`;
        let options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userData),
        };

        let response = await fetch(url, options);
        let result = await response.json();
    } catch (error) {
        console.error(error);
    }
}
