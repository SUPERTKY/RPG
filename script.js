// ブラウザによっては自動再生が制限されているため、クリックで再生
window.addEventListener("click", () => {
  const bgm = document.getElementById("bgm");
  if (bgm.paused) {
    bgm.play();
  }
});
