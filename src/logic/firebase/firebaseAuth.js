import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
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
	console.log(auth)
	setPersistence(auth, browserSessionPersistence)
		.then(() => {
			return signInWithEmailAndPassword(auth, email, password)
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

export {createUser, loginUser};