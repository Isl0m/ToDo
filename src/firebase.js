import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAghW_nMep2XBj2muL8O8epP4Mt42OYAeQ",
  authDomain: "tasker-5e59e.firebaseapp.com",
  databaseURL: "https://tasker-5e59e-default-rtdb.firebaseio.com",
  projectId: "tasker-5e59e",
  storageBucket: "tasker-5e59e.appspot.com",
  messagingSenderId: "590524088323",
  appId: "1:590524088323:web:ea9f27de7ee3d9d024ce36",
  measurementId: "G-S29MR2Y2KD",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);



