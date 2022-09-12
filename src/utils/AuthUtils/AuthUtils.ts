import {accessLoginCookie} from '../StorageUtils'

export const isLoggedIn = () =>{
    if(accessLoginCookie()){
        return true
    }
    return false
}