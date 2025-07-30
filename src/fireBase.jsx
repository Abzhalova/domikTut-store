import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCthy8T0TXcp0yjKDMrxy0XmVistJWsmVo",
  authDomain: "domik3-1a531.firebaseapp.com",
  projectId: "domik3-1a531",
  storageBucket: "domik3-1a531.firebasestorage.app",
  messagingSenderId: "317192655016",
  appId: "1:317192655016:web:5beaf6aa2ab3e44753f29d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
