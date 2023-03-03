import {
	EachStoryLi,
	StoryLink,
	StoryImage,
	StoryUserName,
} from "./styledComponents";

import { eachStoryPropType } from "../../stores/Types/UserStoriesTypes";

import { storyImageAltText } from "../../../Common/constants/LocalConstants";

export const EachStory = (props: eachStoryPropType): JSX.Element => {
	const { story } = props;
	const { userId, userName, storyUrl } = story;
	return (
		<EachStoryLi>
			<StoryLink to={`/users/${userId}`}>
				<StoryImage src={storyUrl} alt={storyImageAltText} />
				<StoryUserName>{userName}</StoryUserName>
			</StoryLink>
		</EachStoryLi>
	);
};
