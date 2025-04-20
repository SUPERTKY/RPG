window.addEventListener("load", () => {
  const bgm = document.getElementById("bgm");
  const nameInputContainer = document.getElementById("name-input-container");
  const playerNameInput = document.getElementById("player-name");
  const startButton = document.getElementById("start-button");
  const playButton = document.getElementById("play-button");
    const playSound = document.getElementById("play-sound"); // ← 効果音
  playSound.volume = 0.2;
  const storedName = localStorage.getItem("playerName");

  if (!storedName) {
    nameInputContainer.classList.remove("hidden");
  } else {
    playButton.classList.remove("hidden"); // 名前登録済みならプレイボタン表示
  }

  startButton.addEventListener("click", () => {
    const name = playerNameInput.value.trim();

    if (name.length === 0) {
      alert("名前を入力してください。");
      return;
    }

    localStorage.setItem("playerName", name);
    nameInputContainer.style.display = "none";
    playButton.classList.remove("hidden"); // 決定後プレイボタンを表示

    if (bgm.paused) bgm.play();
  });

  playerNameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
    }
  });

 playButton.addEventListener("click", () => {
    playSound.currentTime = 0; // 毎回最初から再生
    playSound.play();
    alert("ゲームスタート！"); // ←ここを本編の処理に置き換えてOK
  });
});

window.addEventListener("click", () => {
  const bgm = document.getElementById("bgm");
  const storedName = localStorage.getItem("playerName");
  if (storedName && bgm.paused) {
    bgm.play();
  }
});
