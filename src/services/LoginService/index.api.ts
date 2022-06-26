import {create, ApisauceInstance} from 'apisauce'
import LoginServiceType from './index'
import {LoginRequestObjTypes} from '../../stores/types'
import { apiMethods } from '../../constants/APIConstants';
import config from '../../constants/EnvironmentConstants';

const loginApi = 'https://apis.ccbp.in/login'

class LoginServiceApi implements LoginServiceType{

    api: ApisauceInstance;
  networkCallWithApisauce!: Function;
  constructor(networkCallWithApisauce: any) {
    this.api = create({
      baseURL: `${config.PAYMENT_AUTHENTICATION_URL}`,
    });
    this.networkCallWithApisauce = networkCallWithApisauce;
  }
  // onLogin(requestObject: LoginRequestObjTypes) {
  //   // console.log(requestObject, 'requestObject')
  //   return this.networkCallWithApisauce(
  //     this.api,
  //     'login/v1/',
  //     requestObject,
  //     apiMethods.post
  //   );
  // }
    
    onLogin = async (requestObj: LoginRequestObjTypes) => {

        const options = {
            method: 'POST',
            body: JSON.stringify(requestObj)
        }   

        const response = await fetch(loginApi, options)
        const data = await response.json()
        return data
    }
}

export default LoginServiceApi
