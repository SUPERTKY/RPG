window.addEventListener("load", () => {
  const bgm = document.getElementById("bgm");
  const nameInputContainer = document.getElementById("name-input-container");
  const playerNameInput = document.getElementById("player-name");
  const startButton = document.getElementById("start-button");
  const playButton = document.getElementById("play-button");
    const playSound = document.getElementById("play-sound"); // ← 効果音
   const fadeOverlay = document.getElementById("fade-overlay");
  //playSound.volume = 0.3;
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
  // 効果音再生
  playSound.volume = 0.3;
  playSound.currentTime = 0;
  playSound.play();

  // フェード開始
  fadeOverlay.style.opacity = 1;

  // BGMフェードアウト
  const fadeInterval = setInterval(() => {
    if (bgm.volume > 0.01) {
      bgm.volume -= 0.01;
    } else {
      bgm.volume = 0;
      bgm.pause();
      clearInterval(fadeInterval);
    }
  }, 50); // 50msごとに減らす（約1.5秒で消える）

  // 効果音が終わったら遷移
  playSound.onended = () => {
    window.location.href = "scene2.html";
  };
});

});

window.addEventListener("click", () => {
  const bgm = document.getElementById("bgm");
  const storedName = localStorage.getItem("playerName");
  if (storedName && bgm.paused) {
    bgm.play();
  }
});
