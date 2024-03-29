import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2xUj01j6VfSdLiXxiKIPXjpDxJKWZw4g",
    authDomain: "restaurant-reviewer-5d326.firebaseapp.com",
    projectId: "restaurant-reviewer-5d326",
    storageBucket: "restaurant-reviewer-5d326.appspot.com",
    messagingSenderId: "867168686182",
    appId: "1:867168686182:web:c0a92b92e100bfe3979da7",
    measurementId: "G-HJK06BG9QB",
};

// Initialize Firebase
// export Firebase so it can be used elsewhere

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db, collection, getDocs }