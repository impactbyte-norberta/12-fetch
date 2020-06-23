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

        // Cek email sudah terdaftar atau belum
        let url = `https://5ef168bf1faf160016b4d5a9.mockapi.io/api/users`;

        let response = await fetch(url);
        let allUsers = await response.json();

        let registeredUser = allUsers.filter((user) => user.email === email);

        // Kalau sudah terdaftar
        if (registeredUser.length > 0) {
            alert(`Anda sudah terdaftar`);
        } else {
            // Kalau belum terdaftar, lakukan registrasi
            let options = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(userData),
            };
            let response = await fetch(url, options);
            let result = await response.json();

            alert(`Terima kasih sudah mendaftar`);
        }
    } catch (error) {
        console.error(error);
    }
}
