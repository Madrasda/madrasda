import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBiiVBpre28iCwLy0_Mxc0wX7nn2bFcts4",
  authDomain: "madrasda.firebaseapp.com",
  projectId: "madrasda",
  storageBucket: "madrasda",
  messagingSenderId: "683464698417",
  appId: "1:683464698417:web:29afbf8426c8e4d8e04310",
  measurementId: "G-0Y9NWQZ3WE",
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const NEXT_PUBLIC_PIXEL_ID = 865965204469945;
export const NEXT_PUBLIC_CLARITY_ID = 'i4q56u2czv';