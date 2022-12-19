import {create, ApisauceInstance} from 'apisauce'

import {AuthRequestObjTypes} from '../../stores/types'
import config from '../../../constants/EnvironmentConstants';

import AuthServiceType from './index'

class AuthServiceApi implements AuthServiceType{

    api: ApisauceInstance;
  constructor() {
    this.api = create({
      baseURL: `${config.LOGIN_BASE_URL}`,
    });
  }

    
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
