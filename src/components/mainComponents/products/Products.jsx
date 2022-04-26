import Product from "./Product";
import getProducts from "./getProducts";
import classes from "./product.module.css";

function Products({isProducts}) {
	return (
		<div className={classes.listDiv}>
			<ul className={classes.ul}>
				{isProducts && isProducts.map(product => {
					return <li key={product.id}> <Product props={product.data} getProducts={() => getProducts()}/> </li>;
				})}

			</ul>
		</div>
	);

}

export default Products;