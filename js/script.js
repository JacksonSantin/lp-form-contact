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
    SecureToken: "YOUR_SECURE_TOKEN_HERE", // to use this, you need have account on site https://elasticemail.com/ and, if you use this, you don't need use the code on the lines 19, 20 and 21
    // Host : "smtp.elasticemail.com",
    // Username : "username",
    // Password : "password",
    To: 'YOUR_EMAIL_HERE',
    From: document.getElementById("email").value,
    Subject: "New Contact From Enquiry",
    Body:
      "Name: " + document.getElementById("name").value
      + "<br> E-mail: " + document.getElementById("email").value
      + "<br> Phone: " + document.getElementById("phone").value
      + "<br> Message: " + document.getElementById("message").value
  }).then(
    function (message) {
      if (message === "OK") {
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
      } else {
        Toastify({
          text: message,
          duration: 3000,
          gravity: "top",
          position: "right",
          style: {
            background: "#ff3333",
            borderRadius: "50px"
          },
          stopOnFocus: true
        }).showToast()
      }
    }
  );
}