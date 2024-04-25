import { initializeApp } from "firebase/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzNJe7Y5ljTHujooKba-NUopLqmyCsMIc",
  authDomain: "cape-healthcare-ticket-system.firebaseapp.com",
  databaseURL:
    "https://cape-healthcare-ticket-system-default-rtdb.firebaseio.com",
  projectId: "cape-healthcare-ticket-system",
  storageBucket: "cape-healthcare-ticket-system.appspot.com",
  messagingSenderId: "463957557046",
  appId: "1:463957557046:web:73a7916637161149b6fd97",
};

// Inicializa Firebase
const fb = initializeApp(firebaseConfig);

export default fb;
