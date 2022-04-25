import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";


const AuthenticationContext = createContext(); // manage login state
const AuthenticationContextProvider = ({children}) => {
	const user = getAuth();
	const [isAuth, setIsAuth] = useState(false);

	return (
		// the Provider gives access to the context to its children
		<AuthenticationContext.Provider value={{isAuth, setIsAuth, user}} >
			{children}
		</AuthenticationContext.Provider>
	);
};

export {AuthenticationContext, AuthenticationContextProvider };