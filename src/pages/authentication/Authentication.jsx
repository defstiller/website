import {useContext, useState} from "react";
import {AuthenticationContext} from "../../logic/hookLogic/context" 
import Login from "./Login";
import Signup from "./Register";
function Authentication() { 
	const {isAuth, setIsAuth} = useContext(AuthenticationContext)
	const [isLogin, setIsLogin] = useState(true);
	if(isLogin) {
		return <Login props={{isLogin, setIsLogin}}/>;
	} else {
		return <Signup props={{isLogin, setIsLogin}}/>;
	}

}

export default Authentication;