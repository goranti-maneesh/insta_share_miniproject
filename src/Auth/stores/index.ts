// import AuthServiceApi from '../services/LoginService/index.fixtures'
import AuthServiceApi from '../services/LoginService/index.api'
import { networkCallWithApisauce } from '../utils/APIUtils'

import AuthStore from './AuthStore/index'

const authServiceApiInstance = new AuthServiceApi()
const authStoreInstance = new AuthStore(authServiceApiInstance)

export default {authServiceApiInstance, authStoreInstance}