window.addEventListener("load", () => {
  const bgm = document.getElementById("bgm");
  const nameInputContainer = document.getElementById("name-input-container");
  const playerNameInput = document.getElementById("player-name");
  const startButton = document.getElementById("start-button");

  const storedName = localStorage.getItem("playerName");

  if (!storedName) {
    nameInputContainer.classList.remove("hidden");
  }

  startButton.addEventListener("click", () => {
    const name = playerNameInput.value.trim();
    if (name.length === 0) {
      alert("名前を入力してください。");
    } else {
      localStorage.setItem("playerName", name);
      nameInputContainer.classList.add("hidden");
      if (bgm.paused) bgm.play();
    }
  });
});

window.addEventListener("click", () => {
  const bgm = document.getElementById("bgm");
  const storedName = localStorage.getItem("playerName");
  if (storedName && bgm.paused) {
    bgm.play();
  }
});
