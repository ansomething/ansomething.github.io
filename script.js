function sendMail() {
    let params = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        subject : document.getElementById('subject').value,
        message : document.getElementById('message').value,
    }

    emailjs.sendForm('service_h2dceel', 'template_2tqmqpw', params).then(alert('E-mail enviado!'))
    
}
