// import AuthServiceApi from '../services/LoginService/index.fixtures'
import AuthServiceApi from '../services/LoginService/index.api'
import { networkCallWithApisauce } from '../utils/APIUtils'

import AuthStore from './AuthStore/index'

console.log(networkCallWithApisauce)
const authServiceApiInstance = new AuthServiceApi(networkCallWithApisauce)
const authStoreInstance = new AuthStore(authServiceApiInstance)

export default {authServiceApiInstance, authStoreInstance}