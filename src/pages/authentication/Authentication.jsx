import {useContext, useState} from "react";
import {AuthenticationContext} from "../../logic/hookLogic/context" 
import Login from "./Login";
import Signup from "./Register";
function Authentication() { 
	const {isAuth, setIsAuth} = useContext(AuthenticationContext)
	const [isLogin, setIsLogin] = useState(false); // return login or register data
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	function handleInputChange(event) {
		const target = event.target;
		const targetName = target.name;
		const targetValue = target.value;
		
		setData({
			...data,
			[targetName]: targetValue,
		});
	}
	if(isLogin) {
		return <Login data={{isLogin, setIsLogin, data, setData, handleInputChange}} />;
	} else {
		return <Signup data={{isLogin, setIsLogin, data, setData, handleInputChange}} />;
	}

}

export default Authentication;