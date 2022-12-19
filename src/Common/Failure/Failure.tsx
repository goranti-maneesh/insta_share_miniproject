import {FailureContainer, FailureImage, FailureText, TryAgainButton,} from './styledComponents'

export const Failure = (props) => {
    const {getPostsData} = props
    return(
        <FailureContainer>
            <FailureImage src="https://res.cloudinary.com/degjdup40/image/upload/v1650684083/Group_7522_l65ifd.png" alt="failure image"/>
            <FailureText>Something went wrong. Please try again</FailureText>
            <TryAgainButton type="button" onClick={getPostsData}>Try Again</TryAgainButton>
        </FailureContainer>
    )
}