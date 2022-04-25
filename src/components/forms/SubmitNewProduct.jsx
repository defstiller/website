import handleSubmitProduct from "../../logic/productsLogic/handleSubmitProduct";
function SubmitNewProductForm({setServerResponse, isInput, handleInputChange}) {
	return (
		<form onSubmit={async(event) => {
			setServerResponse(await handleSubmitProduct(event, isInput));
		}}>
			<input placeholder="name of product" value={isInput.name} name="name" onChange={handleInputChange}/>
			<input placeholder="description" value={isInput.description} name="description" onChange={handleInputChange}/>
			<input placeholder="image url" value={isInput.imgUrl} name="imgUrl" onChange={handleInputChange}/>
			<button type="submit">Submit</button>
		</form>
	);
}

export default SubmitNewProductForm;