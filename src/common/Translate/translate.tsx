import i18n from "../../i18n"

import {TranslateContainer} from './styledComponents'

export const Translate = () => {
    const changeLanguage = (event: { target: { value: string } }) => {
        i18n.changeLanguage(event.target.value)
    }
    return(
        <TranslateContainer>
            <select onChange={changeLanguage}>
                <option value="en">En</option>
                <option value="te">Te</option>
            </select>
        </TranslateContainer>
    )
}
