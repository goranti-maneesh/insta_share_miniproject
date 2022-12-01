import AuthServiceApi from "../services/LoginService/index.api"
import { AuthStore } from "../stores/AuthStore/LoginStore"

const authServiceApiInstance = new AuthServiceApi()

const authStoreInstance = new AuthStore(authServiceApiInstance)

export const useAuthStore = () => {
    return authStoreInstance
}
