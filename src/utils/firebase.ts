import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOuKtzV2_lD0Q8NDPqMTsGsB2Wae7FPrY",
  authDomain: "chimera-9e171.firebaseapp.com",
  projectId: "chimera-9e171",
  storageBucket: "chimera-9e171.appspot.com",
  messagingSenderId: "647067171360",
  appId: "1:647067171360:web:0ab89b2e8f7dc8a3721a45",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
