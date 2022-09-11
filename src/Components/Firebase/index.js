import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC4MbIBT2AiXzkgJRWQBwnY2TfPLO10o1c",
  authDomain: "splendshop-35b3b.firebaseapp.com",
  projectId: "splendshop-35b3b",
  storageBucket: "splendshop-35b3b.appspot.com",
  messagingSenderId: "582674629138",
  appId: "1:582674629138:web:0ca46ef9648d13094b0ecb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
