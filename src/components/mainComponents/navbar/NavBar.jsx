import { NavLink } from "react-router-dom";

import classes from "./NavBar.module.css";
import logo from "./logo.svg";

function NavBar() {
	return (
		<nav className={classes.NavBar}>
			<img src={logo} alt="our logo" />
			<ul>
				<li>
					<NavLink to="/" className={({ isActive }) => isActive? "active": null}>Main Page</NavLink>
				</li>
				<li>
					<NavLink to="/" className={({ isActive }) => isActive? "active": null}>Products</NavLink>	
				</li>
				<li>
					<NavLink to="/">Login</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;