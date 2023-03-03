import i18n from "../../i18n";

import { TranslateContainer } from "./styledComponents";

import {translateTeluguText, translateEnglishText} from "../../constants/LocalConstants"

export const Translate = () => {

	const changeLanguage = (event: { target: { value: string } }) => {
		i18n.changeLanguage(event.target.value);
	};
	return (
		<TranslateContainer>
			<select onChange={changeLanguage}>
				<option value="en">{translateEnglishText}</option>
				<option value="te">{translateTeluguText}</option>
			</select>
		</TranslateContainer>
	);
};
