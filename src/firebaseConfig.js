import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTe4Rdgq9W_oMXOQERHuSu5gV_S1pWU9o",
  authDomain: "madrasda-59f3e.firebaseapp.com",
  projectId: "madrasda-59f3e",
  storageBucket: "madrasda-59f3e.appspot.com",
  messagingSenderId: "206873668873",
  appId: "1:206873668873:web:0e1836f928f560514d77d8"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);