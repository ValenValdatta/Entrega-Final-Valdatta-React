import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRawveJfCoEB5TAEpc4qhs__VCNgLifhE",
  authDomain: "servidor-entrega-final-react.firebaseapp.com",
  projectId: "servidor-entrega-final-react",
  storageBucket: "servidor-entrega-final-react.appspot.com",
  messagingSenderId: "423393789551",
  appId: "1:423393789551:web:8fe56120966b2ba89bef9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)