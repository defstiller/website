import classes from "./product.module.css";
function Product ({props}) {
	return (
		<div className={classes.singleDiv}>
			<p>Description : {props.description}</p>
			<p>Image URL : {props.imgUrl}</p>	
		</div>
	);
}

export default Product;