window.addEventListener("load", () => {
  const overlay = document.getElementById("fade-overlay");
  const backButton = document.getElementById("back-button");

 setTimeout(() => {
  overlay.style.opacity = 0;
  console.log("🎬 フェードアウト開始");

  // 完全に消えたらクリックを通す
  setTimeout(() => {
    overlay.classList.add("hidden"); // ← pointer-events を切る！
  }, 2000);
}, 100);


  // 戻るボタン：すぐ反応する
  backButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
