// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBNQa632DsF_1Lyjx4Knu7Mv41GtqVvvfE",
    authDomain: "login-signup-dbdca.firebaseapp.com",
    projectId: "login-signup-dbdca",
    storageBucket: "login-signup-dbdca.appspot.com",
    messagingSenderId: "163950445241",
    appId: "1:163950445241:web:5398f0519e2128e9441168"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
