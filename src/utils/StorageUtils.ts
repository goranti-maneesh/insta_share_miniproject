import Cookies from "js-cookie"

import {TOKEN} from '../constants/LocalConstants'

export const getCookie = (TOKEN: string) => {
    return Cookies.get(TOKEN)
}

export const accessLoginCookie = () => {
    return getCookie(TOKEN)
}