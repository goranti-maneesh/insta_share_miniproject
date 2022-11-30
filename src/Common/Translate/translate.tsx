import i18n from "../i18n"

import { useTranslation } from "react-i18next";

import {TranslateContainer} from './styledComponents'

export const Translate = () => {

    const {t} = useTranslation()

    const changeLanguage = (event: { target: { value: string } }) => {
        i18n.changeLanguage(event.target.value)
    }
    return(
        <TranslateContainer>
            <select onChange={changeLanguage}>
                <option value="en">{t<string>('translateText.english')}</option>
                <option value="te">{t<string>('translateText.telugu')}</option>
            </select>
        </TranslateContainer>
    )
}
