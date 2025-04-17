const bgm = document.getElementById("bgm");

// ユーザー操作がないと音楽がブロックされる場合があるので、ボタンで開始
document.getElementById("start-btn").addEventListener("click", () => {
  bgm.play();
  alert("ゲーム開始！（次の画面に進む処理をここに書きます）");
});
