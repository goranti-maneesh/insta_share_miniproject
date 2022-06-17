import { LoginRequestObjTypes, LoginApiResponseTypes } from "../../stores/types";
import { resolveWithTimeout } from "../../utils/TestUtils";
import LoginServiceType from "./index";
import getLoginResponse from '../../fixtures/getLoginResponse.json'


class LoginServiceApi implements LoginServiceType{
    onLogin(){
        return resolveWithTimeout(getLoginResponse)
    }

}

export default LoginServiceApi