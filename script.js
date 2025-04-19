window.addEventListener("load", () => {
  const bgm = document.getElementById("bgm");
  const nameInputContainer = document.getElementById("name-input-container");
  const playerNameInput = document.getElementById("player-name");
  const startButton = document.getElementById("start-button");

  const storedName = localStorage.getItem("playerName");

  // プレイヤー名が未保存なら入力欄を表示
  if (!storedName) {
    nameInputContainer.classList.remove("hidden");
  }

  startButton.addEventListener("click", () => {
    const name = playerNameInput.value.trim();
    if (name) {
      localStorage.setItem("playerName", name);
      nameInputContainer.classList.add("hidden");
      if (bgm.paused) bgm.play();
    } else {
      alert("名前を入力してください。");
    }
  });
});

// 自動再生対応（2回目以降）
window.addEventListener("click", () => {
  const bgm = document.getElementById("bgm");
  const storedName = localStorage.getItem("playerName");
  if (storedName && bgm.paused) {
    bgm.play();
  }
});
