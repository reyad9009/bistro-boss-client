import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBdp7RYjzOs4b2HQbpfyiDExOTMLBiI4ZU",
    authDomain: "bistro-boss-fdc96.firebaseapp.com",
    projectId: "bistro-boss-fdc96",
    storageBucket: "bistro-boss-fdc96.firebasestorage.app",
    messagingSenderId: "955781132985",
    appId: "1:955781132985:web:53ebd592bebb3acf12e168"
};

export const app = initializeApp(firebaseConfig);