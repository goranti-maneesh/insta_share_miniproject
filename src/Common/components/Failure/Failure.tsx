import { useTranslation } from "react-i18next";

import {
	FailureContainer,
	FailureImage,
	FailureText,
	TryAgainButton,
} from "./styledComponents";

import {
	imageBaseUrl,
	failureImageAltText,
} from "../../constants/LocalConstants";
import { FailureCompTypes } from "../../stores/types";

export const Failure = (props: FailureCompTypes): JSX.Element => {
	const { getPostsData } = props;

	const { t } = useTranslation();

	return (
		<FailureContainer>
			<FailureImage
				src={`${imageBaseUrl}/v1671592495/alert-triangle_uu5ysl.png`}
				alt={failureImageAltText}
			/>
			<FailureText>
				{t<string>("failure.somethingWentWrongText")}
			</FailureText>
			<TryAgainButton type="button" onClick={getPostsData}>
				{t<string>("failure.tryAgainText")}
			</TryAgainButton>
		</FailureContainer>
	);
};
