import { useCallback } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import {db} from "../../../logic/firebase/firebaseCloud";
const getProducts = async(setIsProducts) =>{
	try{
		const resultArray = [];
		const response = await getDocs(collection(db, "products"));
		response.forEach(result => resultArray.push({
			id: result.id,
			data: result.data(),
		}));
		setIsProducts(resultArray);

	} catch(err){
		console.log(err);
	}
};

export default getProducts;