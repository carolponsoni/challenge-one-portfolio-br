document.getElementById('contact-form').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Por favor, insira um e-mail válido.');
        event.preventDefault();
    }
});