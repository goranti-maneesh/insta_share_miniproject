import {EachStoryLi, StoryLink, StoryImage, StoryUserName} from './styledComponents'

import { eachStoryPropType } from "../../Stores/Types/UserStoriesTypes"

export const EachStory = (props: eachStoryPropType): JSX.Element => {
    const {story} = props
    const {userId, userName, storyUrl} = story
    return(
        <EachStoryLi>
            <StoryLink to={`/users/${userId}`}>
                <StoryImage src={storyUrl} alt="story-image"/>
                <StoryUserName>{userName}</StoryUserName>
            </StoryLink>
        </EachStoryLi>
    )
}