import { SetStateAction } from 'react'

import {InputFieldContainer, LabelElement, InputElement, ErrorMsg} from './styledComponents'

import {loginUserNameAndPasswordPropTypes} from '../../stores/types'
import { isLoggedIn } from '../../utils/AuthUtils/AuthUtils'

export const useInputLabelContainer = (props: loginUserNameAndPasswordPropTypes) => {
    const {type,
    labelText,
    id,
    value,
    onchangeMethod,
    placeholder,
    isErrorDisplayed,
    setFunction,
    errMsg,
    onblurFunc,
    OnFocusEvent} = props
    

    return(
    <InputFieldContainer>
        <LabelElement htmlFor={id}>{labelText}</LabelElement>
        <br/>
        <InputElement type={type} value={value} id={id} onChange={onchangeMethod} placeholder={placeholder} onFocus={() => OnFocusEvent(setFunction)} onBlur={onblurFunc}/>
        <ErrorMsg>{isErrorDisplayed ? errMsg: null}</ErrorMsg>
    </InputFieldContainer>
    )
}

