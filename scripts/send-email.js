function senEmail() {
    var name = document.getElementById("cl_name").value;
    var email = document.getElementById("cl_email").value;
    var message = document.getElementById("cl_message").value;

    fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer re_YVfPRDMX_3SMptSXV9cRsqrn8SaRS2VTj`
        },
        body: JSON.stringify(
            {
                from: `${name}<${email}>`,
                to: 'crisdavloz98@gmail.com',
                subject: `${name} quiere comunicarse contigo`,
                html: `<p>${message}</p>`,
            }
        )
    })
        .then(response =>{
            const containerMessage = document.getElementById("cl_contact-message")
            containerMessage.innerText("Mensaje enviado con éxito");
            setTimeout(()=>{
                containerMessage.innerText("");
            },5000)
            console.log(response.json());

        } 
        )
        .then(data => {
            console.log('Respuesta de la API:', data);
            // Puedes realizar acciones adicionales aquí, como mostrar un mensaje de éxito al usuario.
        })
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje de error al usuario.
        });
}
