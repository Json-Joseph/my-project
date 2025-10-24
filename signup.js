import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

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

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("تم إنشاء الحساب بنجاح");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("حدث خطأ: " + error.message);
    });
});


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert("تم إنشاء الحساب بنجاح");
    window.location.href = "index.html"; // بعد التسجيل يروح للصفحة الرئيسية
  })
  .catch((error) => {
    alert("حدث خطأ: " + error.message);
  });
