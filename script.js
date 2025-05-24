function checkPassword() {
  const input = document.getElementById("password-input").value;
  if (input === "Tibor") {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    alert("Incorrect password. Try again.");
  }
}
