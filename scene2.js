window.addEventListener("load", () => {
  const overlay = document.getElementById("fade-overlay");
  const content = document.getElementById("content");

  // フェードアウト開始
  setTimeout(() => {
    overlay.style.opacity = 0;

    // 完全に明るくなってから操作可能にする
    setTimeout(() => {
      content.style.pointerEvents = "auto";
    }, 2000); // フェード時間と同じ
  }, 100); // 少し遅らせて確実にロードさせる
});
