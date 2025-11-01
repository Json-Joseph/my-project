// اتصال بـ Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// تسجيل الدخول
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("تم تسجيل الدخول بنجاح");
      window.location.href = "index.html"; // بعد تسجيل الدخول يروح للصفحة الرئيسية
    })
    .catch((error) => {
        alert("خطأ في تسجيل الدخول: " + error.message);
    });
});


import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("المستخدم داخل:", user.email);
  } else {
    console.log("المستخدم مش داخل");
  }
});