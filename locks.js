const LOCK_KEY = "site_lock_guard";
const TIMEOUT_MS = 5000;

function checkTabLock() {
  const now = Date.now();
  const existing = localStorage.getItem(LOCK_KEY);

  // 自分の前に他タブが更新してたら弾く
  if (existing && now - Number(existing) < TIMEOUT_MS) {
    alert("⚠️ このアカウントですでに他のタブが開かれています！");
    document.body.innerHTML = ""; // ページ非表示
    throw new Error("複数タブ制限により停止");
  }

  // 自分でロックをかける
  localStorage.setItem(LOCK_KEY, now);

  // 定期更新
  setInterval(() => {
    localStorage.setItem(LOCK_KEY, Date.now());
  }, 1000);

  // 離脱時にロック解除
  window.addEventListener("beforeunload", () => {
    localStorage.removeItem(LOCK_KEY);
  });
}

// ✅ ページ完全読み込み後にロックチェック
window.addEventListener("DOMContentLoaded", () => {
  checkTabLock();
});
