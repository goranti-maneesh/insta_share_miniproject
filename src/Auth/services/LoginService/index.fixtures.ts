import {ApisauceInstance} from 'apisauce'
import AuthServiceType from "./index";

import { AuthRequestObjTypes, AuthApiResponseObjTypes } from "../../stores/types";
import { resolveWithTimeout } from "../../utils/TestUtils";
import getLoginResponse from '../../fixtures/getLoginResponse.json'


class AuthServiceApi implements AuthServiceType{
  // api: ApisauceInstance;
  //   networkCallWithApisauce!: Function;
  // constructor(networkCallWithApisauce: any) {
  //   this.networkCallWithApisauce = networkCallWithApisauce;
  // }

    onAuthLogin(){
        return resolveWithTimeout(getLoginResponse)
    }

}

export default AuthServiceApi