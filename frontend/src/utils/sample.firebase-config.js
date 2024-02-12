import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //   Add your own Configuartion
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
