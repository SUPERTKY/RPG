window.addEventListener("load", () => {
  const overlay = document.getElementById("fade-overlay");
  const content = document.getElementById("content");
  const backButton = document.getElementById("back-button");

  setTimeout(() => {
    overlay.style.opacity = 0;

    // フェード終了後、操作可能に
    setTimeout(() => {
      content.style.pointerEvents = "auto";
      backButton.disabled = false;
    }, 2000);
  }, 100);

  // ホームに戻る処理
  backButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });

  // 最初はボタン無効にしておく
  backButton.disabled = true;
});
