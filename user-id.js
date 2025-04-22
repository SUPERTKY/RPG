function generateRandomID(length = 6) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return "player_" + id;
}

let userId = localStorage.getItem("userId");

if (!userId) {
  userId = generateRandomID();
  localStorage.setItem("userId", userId);
  console.log("✅ 新規ユーザーID:", userId);
} else {
  console.log("🔁 既存ユーザーID:", userId);
}
