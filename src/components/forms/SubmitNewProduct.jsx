import handleSubmitProduct from "../../logic/productsLogic/handleSubmitProduct";
import classes from "./submitNewProduct.module.css";
function SubmitNewProduct({setServerResponse, isInput, handleInputChange, setIsProducts}) {
	return (
		<div className={classes.div}>
			<form 
				className={classes.form} 
				onSubmit={async(event) => {
					setServerResponse(await handleSubmitProduct(
						event, 
						isInput, 
						setIsProducts
					));
				}}>
				<input 
					className={classes.input} 
					placeholder="name of product" 
					value={isInput.name} name="name" 
					onChange={handleInputChange}
				/>
				<input 
					className={classes.input} 
					placeholder="description" 
					value={isInput.description} 
					name="description" 
					onChange={handleInputChange}
				/>
				<input 
					className={classes.input} 
					placeholder="image url" 
					value={isInput.imgUrl} 
					name="imgUrl" 
					onChange={handleInputChange}/>
				<input 
					className={classes.input} 
					placeholder="price" 
					value={isInput.price} 
					name="price" 
					onChange={handleInputChange} 
					type="number"/>
		
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default SubmitNewProduct;