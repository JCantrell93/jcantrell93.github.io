function checkPassword() {
  const input = document.getElementById("password-input").value;
  if (input === "The Vatican") {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    alert("Incorrect password. Try again.");
  }
}

function playMusic() {
  const container = document.getElementById("audio-container");
  container.innerHTML = `
    <iframe
      width="0"
      height="0"
      src="https://www.youtube.com/embed/hw7I2GehPUk?start=15&autoplay=1&loop=1&playlist=hw7I2GehPUk"
      frameborder="0"
      allow="autoplay"
    ></iframe>
  `;
}



