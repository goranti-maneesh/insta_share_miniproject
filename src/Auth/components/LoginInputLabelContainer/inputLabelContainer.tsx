import { useState } from "react";

import {
	InputFieldContainer,
	LabelElement,
	InputElement,
	ErrorMsg,
} from "./styledComponents";

import { loginUserNameAndPasswordPropTypes } from "../../stores/types";

export const useInputLabelContainer = (
	props: loginUserNameAndPasswordPropTypes,
): JSX.Element => {
	const {
		type,
		labelText,
		id,
		value,
		onchangeMethod,
		placeholder,
		errMsg,
		regexValue,
	} = props;

	const [isErrorDisplayed, setErrorDisplayStatus] = useState(
		false as boolean,
	);

	const onBlurInputElement = () => {
		setErrorDisplayStatus(!regexValue.test(value));
	};

	const onFocusInputElement = () => {
		setErrorDisplayStatus(false);
	};

	return (
		<InputFieldContainer>
			<LabelElement htmlFor={id}>{labelText}</LabelElement>
			<br />
			<InputElement
				type={type}
				value={value}
				id={id}
				onChange={onchangeMethod}
				placeholder={placeholder}
				onFocus={onFocusInputElement}
				onBlur={onBlurInputElement}
			/>
			<ErrorMsg>{isErrorDisplayed ? errMsg : null}</ErrorMsg>
		</InputFieldContainer>
	);
};
