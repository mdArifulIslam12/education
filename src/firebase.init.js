// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDykWoNJqFLRL5pDrlwovnNk3nIRUhoOuQ",
  authDomain: "education-8600b.firebaseapp.com",
  projectId: "education-8600b",
  storageBucket: "education-8600b.appspot.com",
  messagingSenderId: "487213152509",
  appId: "1:487213152509:web:bf57b8530d130c60bde694"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth