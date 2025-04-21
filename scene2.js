window.addEventListener("load", () => {
  const overlay = document.getElementById("fade-overlay");
  const backButton = document.getElementById("back-button");

  // フェードアウト処理（見た目だけ）
  setTimeout(() => {
    overlay.style.opacity = 0;
  }, 100);

  // 戻るボタン：すぐ反応する
  backButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
