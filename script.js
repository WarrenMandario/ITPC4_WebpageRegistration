const form = document.getElementById("registrationForm");
if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const data = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      program: document.getElementById("program").value,
      yearLevel: document.getElementById("yearLevel").value,
      birthdate: document.getElementById("birthdate").value,
      specialization: document.getElementById("specialization").value,
      bio: document.getElementById("bio").value,
      profilePic: document.getElementById("profilePic").files[0]?.name || ""
    };

    console.log("Form Submitted", data);
    alert("Registration successful! Check console for details.");
    form.reset();
  });
} else {
  console.error("Registration form not found.");
}