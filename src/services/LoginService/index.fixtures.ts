import LoginServiceType from "./index";

import { LoginRequestObjTypes, LoginApiResponseObjTypes } from "../../stores/types";
import { resolveWithTimeout } from "../../utils/TestUtils";
import getLoginResponse from '../../fixtures/getLoginResponse.json'


class LoginServiceApi implements LoginServiceType{

    networkCallWithApisauce!: Function;
  constructor(networkCallWithApisauce: any) {
    this.networkCallWithApisauce = networkCallWithApisauce;
  }

    onLogin(){
        return resolveWithTimeout(getLoginResponse)
    }

}

export default LoginServiceApi