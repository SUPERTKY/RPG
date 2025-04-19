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
      return;
    }

    // 名前を保存し、表示を完全に隠す
    localStorage.setItem("playerName", name);
    nameInputContainer.style.display = "none"; // ← ここをremove()の代わりにする
    if (bgm.paused) bgm.play();
  });

  // Enter / Spaceでフォームが送信されないようにする
  playerNameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
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
