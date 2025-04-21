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
