import {create, ApisauceInstance} from 'apisauce'

import {AuthRequestObjTypes} from '../../stores/types'
import { apiMethods } from '../../constants/APIConstants';
import config from '../../constants/EnvironmentConstants';
import {loginApi} from '../../constants/LocalConstants'

import AuthServiceType from './index'

class AuthServiceApi implements AuthServiceType{

    api: ApisauceInstance;
  networkCallWithApisauce!: Function;
  constructor(networkCallWithApisauce: any) {
    this.api = create({
      baseURL: `${config.LOGIN_BASE_URL}`,
    });
    this.networkCallWithApisauce = networkCallWithApisauce;
  }

  // onAuthLogin(requestObject: AuthRequestObjTypes) {
  //     console.log(this.networkCallWithApisauce, "api")
  //     return this.networkCallWithApisauce(
  //       this.api,
  //       '/login',
  //       requestObject,
  //       apiMethods.post
  //     );
  //   }
    
    onAuthLogin = async (requestObj: AuthRequestObjTypes) => {

        const options = {
            method: 'POST',
            body: JSON.stringify(requestObj)
        }   

        const response = await fetch(loginApi, options)
        const data = await response.json()
        return data
    }
}

export default AuthServiceApi
