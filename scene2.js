window.addEventListener("load", () => {
  const overlay = document.getElementById("fade-overlay");
  const backButton = document.getElementById("back-button");

  setTimeout(() => {
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = "none"; // ← ここで即クリック通す
    console.log("🎬 フェードアウト開始");

    // 完全に消えたらクラスも付けておく（念のため）
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 2000);
  }, 100);

  // 戻るボタン：すぐ反応する
  backButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
window.addEventListener("DOMContentLoaded", () => {
  const bgm = document.getElementById("bgm");
  if (bgm) bgm.volume = 0.5;
});
const readyButton = document.getElementById("ready-button");

readyButton.addEventListener("click", async () => {
  const currentRoom = localStorage.getItem("currentRoom");
  const userId = localStorage.getItem("userId");

  if (!currentRoom || !userId) return;

  await set(ref(db, `rooms/${currentRoom}/members/${userId}/status`), "ready");

  // ボタン無効化 & 見た目変える（画像変えてもOK）
  readyButton.style.opacity = 0.5;
  readyButton.style.pointerEvents = "none";
});
