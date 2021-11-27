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
    prompt("Failed to log in.");
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = event.target[2].value.trim();
  console.log(name);
  const email = event.target[0].value.trim();
  console.log(email);
  const password = event.target[1].value.trim();
  console.log(password);

  if (name && email && password) {
    const response = await fetch("/api/new", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
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
