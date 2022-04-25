import {useState, useEffect, useCallback} from "react";

import {db} from "../../../logic/firebase/firebaseCloud";
import { collection, getDocs } from "firebase/firestore"; 

import Product from "./Product";

function Products() {
	const [isProducts, setIsProducts] = useState();

	const getProducts = useCallback(async() =>{
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
	}, []);

	useEffect(() =>{
		getProducts();
	},[getProducts]);

	return (
		<div>
			{isProducts && isProducts.map(product => {
				return <Product key={product.id} props={product.data} />;
			})}
		</div>
	);

}

export default Products;