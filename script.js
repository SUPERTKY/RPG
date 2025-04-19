window.addEventListener("load", () => {
  const bgm = document.getElementById("bgm");
  const nameInputContainer = document.getElementById("name-input-container");
  const nameBox = document.getElementById("name-letter-box");
  const startButton = document.getElementById("start-button");

  const storedName = localStorage.getItem("playerName");

  if (!storedName) {
    nameInputContainer.classList.remove("hidden");
  }

  startButton.addEventListener("click", () => {
    const name = nameBox.innerText.trim();

    if (name.length === 0) {
      alert("名前を入力してください。");
      return;
    }

    if (name.length > 10) {
      alert("名前は10文字以内にしてください。");
      return;
    }

    localStorage.setItem("playerName", name);
    nameInputContainer.remove(); // 枠ごと消す
    if (bgm.paused) bgm.play();
  });
});

window.addEventListener("click", () => {
  const bgm = document.getElementById("bgm");
  const storedName = localStorage.getItem("playerName");
  if (storedName && bgm.paused) {
    bgm.play();
  }
});
