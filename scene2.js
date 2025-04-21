window.addEventListener("load", () => {
  const overlay = document.getElementById("fade-overlay");
  const content = document.getElementById("content");
  const backButton = document.getElementById("back-button");

  setTimeout(() => {
    overlay.style.opacity = 0;

    setTimeout(() => {
      content.style.pointerEvents = "auto";
      backButton.classList.add("enabled"); // ← 有効化
    }, 2000);
  }, 100);

  // 戻るボタンを押したらホームへ
  backButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
