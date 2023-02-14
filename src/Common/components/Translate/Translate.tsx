import i18n from "../../i18n";

import { useTranslation } from "react-i18next";

import { TranslateContainer } from "./styledComponents";

export const Translate = () => {
	const { t } = useTranslation();

	const changeLanguage = (event: { target: { value: string } }) => {
		i18n.changeLanguage(event.target.value);
	};
	return (
		<TranslateContainer>
			<select onChange={changeLanguage}>
				<option value="en">English</option>
				<option value="te">తెలుగు</option>
			</select>
		</TranslateContainer>
	);
};
