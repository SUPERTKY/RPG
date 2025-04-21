<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getDatabase, ref, get, set, child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA7SXxjTK4OIRttEwJ1sDSgaXs45eZQcPQ",
  authDomain: "myrpggame-5eba1.firebaseapp.com",
  projectId: "myrpggame-5eba1",
  storageBucket: "myrpggame-5eba1.firebasestorage.app",
  messagingSenderId: "283723511502",
  appId: "1:283723511502:web:4e5014928190c3a4e0829f"
};

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  // 重複のないルーム番号を作成
  async function generateUniqueRoomNumber() {
    const dbRef = ref(db, "rooms");
    let roomNumber;
    let exists = true;

    while (exists) {
      roomNumber = Math.floor(1000 + Math.random() * 9000).toString(); // 4桁のランダム数字
      const snapshot = await get(child(dbRef, roomNumber));
      exists = snapshot.exists(); // すでに存在する番号かどうか
    }

    return roomNumber;
  }

  document.getElementById("create-room-button").addEventListener("click", async () => {
    const roomNumber = await generateUniqueRoomNumber();

    const roomRef = ref(db, `rooms/${roomNumber}`);
    await set(roomRef, {
      createdAt: Date.now(),
      status: "waiting",
    });

    alert(`✅ ルーム ${roomNumber} が作成されました！`);
    // あとはこの番号を画面表示 or コピペ可能にするなど
  });
</script>
