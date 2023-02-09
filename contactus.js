function sendEmail(){
    Email.send({
        Host :"smtp.elasticemail.com",
        Username : "tdenise1113@gmail.com",
        Password : "E3846FFEB6FF39967A8DD36060031BAE71A5",
        To : 'donut190200@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("contactEmail").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
    message => alert("Message sent successfully!")
    );
}
