import { useContext, createContext } from "react"

import AuthServiceApi from "../services/LoginService/index.api"
import { AuthStore } from "../stores/AuthStore/LoginStore"

const authServiceApiInstance = new AuthServiceApi()

const authStoreInstance = new AuthStore(authServiceApiInstance)

const AuthContext = createContext(null)

export const AuthStoreHook = ({children}) => {
    return(
        <AuthContext.Provider value={authStoreInstance}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthStoreHook = () => useContext(AuthContext)