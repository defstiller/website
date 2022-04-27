import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence, onAuthStateChanged } from "firebase/auth";
import {auth} from "./firebaseConfig";

//create new user
function createUser(email, password) {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
		// Signed in 
			const user = userCredential.user;
			console.log(user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorMessage);
			console.log(errorCode);
		});

}

//login existing user
function loginUser(email, password) {
	const auth = getAuth();
	setPersistence(auth, browserSessionPersistence)
		.then(() => {
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
				// Signed in 
					const user = userCredential.user;
					console.log(user);
				// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log(errorMessage);
					console.log(errorCode);
				});
		});
}

onAuthStateChanged(auth, (user) => {
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		const uid = user.uid;
		console.log(uid)
	// ...
	} else {
	// User is signed out
	}
});

export {createUser, loginUser};