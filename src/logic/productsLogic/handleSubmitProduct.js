import {db} from "../firebase/firebaseCloud";
import { collection, addDoc } from "firebase/firestore"; 

import getProducts from "../../components/mainComponents/products/getProducts";
const handleSubmitProduct = async(event, isInput, setIsProducts) => {
	event.preventDefault();
	let response = "";
	try {
		const docRef = await addDoc(collection(db, "products"), isInput);
		response = "Product added with ID: " + docRef.id;
		getProducts(setIsProducts);
	}
	catch (error) {
		response = "Error adding product: " + error;
	} 
	return response;
};

export default handleSubmitProduct;