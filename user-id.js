// ✅ ランダムIDを作る（例：6文字）
function generateRandomID(length = 6) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return "player_" + id;
}

// ✅ ローカルストレージから取得、なければ新規作成して保存
export function getUserId() {
  let userId = localStorage.getItem("userId");

  if (!userId) {
    userId = generateRandomID();
    localStorage.setItem("userId", userId);
    console.log("✅ 新しいユーザーIDを作成:", userId);
  } else {
    console.log("🔁 既存のユーザーIDを使用:", userId);
  }

  return userId;
}
