// import LoginServiceApi from '../services/LoginService/index.fixtures'
import LoginServiceApi from '../services/LoginService/index.api'
import { networkCallWithApisauce } from '../utils/APIUtils'

import LoginStore from './LoginStore/index'

const LoginServiceApiInstance = new LoginServiceApi(networkCallWithApisauce)
const LoginStoreInstance = new LoginStore(LoginServiceApiInstance)

export default {LoginServiceApiInstance, LoginStoreInstance}