import {useState, useEffect} from "react";

import Products from "../components/mainComponents/products/Products";
import ModalWithResponseData from "../components/modals/ModalWithResponseData.jsx";
import SubmitNewProductForm from "../components/forms/SubmitNewProduct";
function Home() {
	const [serverResponse, setServerResponse] = useState();
	const [isInput, setIsInput] = useState({
		name:"",
		description:"",
		imgUrl:"",
	});

	function handleInputChange(event){ 
		const value = event.target.value;
		setIsInput({
			...isInput,
			[event.target.name]: value,
		});
	}

	useEffect(() => { // clears modal after 5 sec
		if(serverResponse) {
			const closeModal = setTimeout(() => {
				setServerResponse();
			}, 5000);
			return () => clearTimeout(closeModal);
		}
	}, [serverResponse]);

	return (<>
		<h2>Home page</h2>
		<SubmitNewProductForm setServerResponse={setServerResponse} isInput={isInput} handleInputChange={handleInputChange} />
		{serverResponse && <ModalWithResponseData data={serverResponse}/>}
		<main>
			<Products />
		</main>
	</>
	);
}

export default Home;