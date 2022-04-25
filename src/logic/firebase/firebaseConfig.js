// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyCk-fXi46NHIIym21R6Og8IVZkksj7ZEO0",
	authDomain: "react-ef8b3.firebaseapp.com",
	projectId: "react-ef8b3",
	storageBucket: "react-ef8b3.appspot.com",
	messagingSenderId: "414747320378",
	appId: "1:414747320378:web:ae80ac4ababff9dda7d503",
	measurementId: "G-1VWQW4FWMP",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();
const analytics = getAnalytics(app);

export {auth, analytics, firebaseConfig};