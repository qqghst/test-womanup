import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD7j6v6z_EIG939TNAW_QjE8-i3gKhuDxQ",
    authDomain: "womanup-test-d0814.firebaseapp.com",
    projectId: "womanup-test-d0814",
    storageBucket: "womanup-test-d0814.appspot.com",
    messagingSenderId: "788951493554",
    appId: "1:788951493554:web:1b00c14efc510f498bd2ab"
}; 

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)