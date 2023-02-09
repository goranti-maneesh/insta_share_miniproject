import {
	FailureContainer,
	FailureImage,
	FailureText,
	TryAgainButton,
} from "./styledComponents";

import { FailureCompTypes } from "../Stores/types";

export const Failure = (props: FailureCompTypes): JSX.Element => {
	const { getPostsData } = props;
	return (
		<FailureContainer>
			<FailureImage
				src="https://res.cloudinary.com/degjdup40/image/upload/v1671592495/alert-triangle_uu5ysl.png"
				alt="failure image"
			/>
			<FailureText>Something went wrong. Please try again</FailureText>
			<TryAgainButton type="button" onClick={getPostsData}>
				Try Again
			</TryAgainButton>
		</FailureContainer>
	);
};
