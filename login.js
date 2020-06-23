let loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', login);

function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // ambil semua data users

    let url = `https://5ef168bf1faf160016b4d5a9.mockapi.io/api/users`;

    fetch(url)
        .then((response) => response.json())
        .then((results) => {
            let user = results.filter((result) => result.email === email);

            if (user.length > 0) {
                if (user[0].password === password) {
                    // redirect ke halaman profile
                    window.location.replace('./profile.html');
                } else {
                    alert(`Email atau password Anda salah`);
                }
            } else {
                alert('Anda belum terdaftar');
            }
        })
        .catch((error) => console.error(error));
}
