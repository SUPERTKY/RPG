window.addEventListener("load", () => {
  const bgm = document.getElementById("bgm");
  const nameInputContainer = document.getElementById("name-input-container");
  const nameUI = document.getElementById("name-ui");
  const nameBox = document.getElementById("name-letter-box");
  const startButton = document.getElementById("start-button");

  const storedName = localStorage.getItem("playerName");

  if (!storedName) {
    nameInputContainer.classList.remove("hidden");
  } else {
    nameUI.style.display = "none"; // 初回じゃなければUI非表示（画像は残す）
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

    nameUI.style.display = "none"; // 🔁 UIだけ消して、画像は残す
    if (bgm.paused) bgm.play();
  });
});
