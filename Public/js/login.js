const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log(event);
  console.log(event.target[0].value);

  const email = event.target[0].value.trim();
  console.log(email);

  const password = event.target[1].value.trim();
  console.log(password);

  if (email && password) {
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to log in.");
    }
  } else {
    console.log("Nope");
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#new-name").value.trim();
  const email = document.querySelector("#new-email").value.trim();
  const password = document.querySelector("#new-password").value.trim();

  if (username && email && password) {
    const response = await fetch("/", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
