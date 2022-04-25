import {db} from "../firebase/firebaseCloud";
import { collection, addDoc, getDocs } from "firebase/firestore"; 

const handleSubmitProduct = async(event, isInput) => {
	event.preventDefault();
	let response = "";
	try {
		const docRef = await addDoc(collection(db, "products"), isInput);
		response = "Product added with ID: " + docRef.id;
	}
	catch (error) {
		response = "Error adding product: " + error;
	} 
	return response;
};

export default handleSubmitProduct;