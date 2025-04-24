// lock.js
const LOCK_KEY = "site_lock_guard";
const TIMEOUT_MS = 5000; // 5秒以内にロックなければOKとする
const now = Date.now();
const existing = localStorage.getItem(LOCK_KEY);

// 他タブでロック中ならブロック
if (existing && now - Number(existing) < TIMEOUT_MS) {
  alert("⚠️ このアカウントですでに他のタブが開かれています！");
  document.body.innerHTML = ""; // 全ページ消すなど
  throw new Error("複数タブ制限により停止");
}

// 自分でロックをかける
localStorage.setItem(LOCK_KEY, now);

// 定期的にロック更新（他タブが古いと判断されるように）
setInterval(() => {
  localStorage.setItem(LOCK_KEY, Date.now());
}, 1000);

// ウィンドウ閉じたらロック解除
window.addEventListener("beforeunload", () => {
  localStorage.removeItem(LOCK_KEY);
});
