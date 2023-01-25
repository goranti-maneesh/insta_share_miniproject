import Cookies from "js-cookie"

import {TOKEN} from '../constants/LocalConstants'

export const setCookie = (TOKEN: string, TOKENVALUE: string) => {
    return Cookies.set(TOKEN, TOKENVALUE, {expires:30})
}

export const getCookie = (TOKEN: string) => {
    return Cookies.get(TOKEN)
}

export const removeCookie = (TOKEN: string, props) => {
    const {history} = props
    history.push("/login")
    return Cookies.remove(TOKEN)
}

export const setJwtToken = (TOKENVALUE: string) => {
    return setCookie(TOKEN, TOKENVALUE)
}
 
export const accessLoginCookie = () => {
    return getCookie(TOKEN)
}

export const accessRemoveCookie = (props) => {
    return removeCookie(TOKEN, props)
}