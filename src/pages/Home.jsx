import {useState, useEffect} from "react";

import Products from "../components/mainComponents/products/Products";
import handleSubmitProduct from "../logic/productsLogic/handleSubmitProduct";
import ModalWithResponseData from "../components/modals/ModalWithResponseData.jsx"
function Home() {
	// const [isModalOpen, setIsModalOpen] = useState({
	// 	isOpen: false,
	// 	data: {},
	// });
	const [data, setData] = useState();
	const [isInput, setIsInput] = useState({
		name:"",
		description:"",
		imgUrl:"",
	});
	
	useEffect(() => { // clears modal after 5 sec
		if(data) {
			const closeModal = setTimeout(() => {
				setData();
			}, 5000);
			return () => clearTimeout(closeModal);
		}
	}, [data]);

	function handleInputChange(event){ 
		const value = event.target.value;
		setIsInput({
			...isInput,
			[event.target.name]: value,
		});
	}

	return (<>
		<h2>Home page</h2>

		<form onSubmit={async(event) => {
			setData(await handleSubmitProduct(event, isInput));
		}}>
			<input placeholder="name of product" value={isInput.name} name="name" onChange={handleInputChange}/>
			<input placeholder="description" value={isInput.description} name="description" onChange={handleInputChange}/>
			<input placeholder="image url" value={isInput.imgUrl} name="imgUrl" onChange={handleInputChange}/>
			<button type="submit">Submit</button>
		</form>
		{data && <ModalWithResponseData data={data}/>}
		<main>
			<Products />
		</main>
	</>
	);
}

export default Home;