function sendMail() {
    let params = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        subject : document.getElementById('subject').value,
        msg : document.getElementById('message').value,
    }

    emailjs.send('service_h2dceel', 'template_eryjwrs', params).then(alert('E-mail enviado!'))
    
}