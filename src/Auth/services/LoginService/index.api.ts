import {create, ApisauceInstance} from 'apisauce'

import {AuthRequestObjTypes} from '../../stores/types'
import { apiMethods } from '../../../constants/APIConstants';
import config from '../../../constants/EnvironmentConstants';
import {loginApi} from '../../../constants/LocalConstants'

import AuthServiceType from './index'

class AuthServiceApi implements AuthServiceType{

    api: ApisauceInstance;
  constructor() {
    this.api = create({
      baseURL: `${config.LOGIN_BASE_URL}`,
    });
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
      
      const url = `${config.LOGIN_BASE_URL}/login`
      
      const response = await fetch(url, options)
      const data = await response.json()
        return {
          ...data,responseStatus: response.ok
        }
    }
}

export default AuthServiceApi
