// نستورد مكتبات Firebase من الإنترنت
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

// هنا بتحط بيانات مشروعك من Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAodVCG4uXsHzPlkzu6J8J9tBN_9DRzjCI",
    authDomain: "graduation-joja.firebaseapp.com",
    databaseURL: "https://graduation-joja-default-rtdb.firebaseio.com",
    projectId: "graduation-joja",
    storageBucket: "graduation-joja.firebasestorage.app",
    messagingSenderId: "130643040303",
    appId: "1:130643040303:web:ec703aeea373af27780eda",
    measurementId: "G-1DX78ZMT9Y"
};  

// نربط الموقع بـ Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// لما المستخدم يضغط إرسال
const form = document.getElementById("messageForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

  // نخزن الرسالة
    const messagesRef = ref(db, "messages");
    const newMessage = push(messagesRef);

    set(newMessage, {
        name: name || "مجهول",
        message: message,
        timestamp: Date.now()
    })
    .then(() => {
        document.getElementById("success").innerText = "تم إرسال الرسالة بنجاح!";
        form.reset();
    })
    .catch((error) => {
        console.error("Error:", error);
    });
});