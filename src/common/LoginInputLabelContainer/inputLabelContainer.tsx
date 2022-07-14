import { SetStateAction } from 'react'
import {InputFieldContainer, LabelElement, InputElement, ErrorMsg} from './styledComponents'

export const useInputLabelContainer = (type:string, labelText: string, id: string, value:string, onchangeMethod: (event: React.FormEvent<HTMLInputElement>) => void, placeholder: string, 
isErrorDisplayed: boolean, setFunction: { (value: React.SetStateAction<boolean>): void}, errMsg: string, onblurFunc: React.FocusEventHandler<HTMLInputElement>, 
OnFocusEvent: { (setFunction: (value: SetStateAction<boolean>) => void): void }) => (
    <InputFieldContainer>
        <LabelElement htmlFor={id}>{labelText}</LabelElement>
        <br/>
        <InputElement type={type} value={value} id={id} onChange={onchangeMethod} placeholder={placeholder} onFocus={() => OnFocusEvent(setFunction)} onBlur={onblurFunc}/>
        <ErrorMsg>{isErrorDisplayed ? errMsg: null}</ErrorMsg>
    </InputFieldContainer>
)

