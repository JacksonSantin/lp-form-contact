function aplicarMascara() {
  let telefoneInput = document.getElementById("phone");
  let telefone = telefoneInput.value;

  telefone = telefone.replace(/\D/g, '');

  if (telefone.length === 11) {
    telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else if (telefone.length === 10) {
    telefone = telefone.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
  }

  telefoneInput.value = telefone;
}

function sendEmail() {
  Email.send({
    SecureToken: "4f7da468-6411-494a-862f-a52085bc91fe",
    To: 'jackdhanyelsn@gmail.com',
    From: document.getElementById("email").value,
    Subject: "New Contact From Enquiry",
    Body:
      "Name: " + document.getElementById("name").value
      + "<br> E-mail: " + document.getElementById("email").value
      + "<br> Phone: " + document.getElementById("phone").value
      + "<br> Message: " + document.getElementById("message").value
  }).then(
    Toastify({
      text: "Message sent succesfully!",
      duration: 3000,
      gravity: "top",
      position: "right",
      style: {
        background: "#198754",
        borderRadius: "50px"
      },
      stopOnFocus: true
    }).showToast()
  );
}