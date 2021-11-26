const logout = async () => {
  const response = await fetch("/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};

// There is currently no logout button identified
document.querySelector("#logout").addEventListener("click", logout);
