import { useState } from 'react'
import {EachPostli, UserDetails, ProfilePicBGContainer, ProfilePicContainer, ProfilePic, UserName, 
    PostImageConstainer, PostImage, PostDetailsSection, LoveCommentShareContainer,
    IconBtton, LoveIconFill, LoveIconOutline, CommentIcon, ShareIcon, LikesAndCommentsSection, LikesCount, Caption, CommentsUl, CommentLi,
    CommentedUser, Comment, CreatedAt} from './styledComponents'

export const EachPost = (props) => {
    const {post} = props
    const {comments, createdAt, likesCount, postDetails, postId, profilePic, userId, userName} = post

    const [isLiked, setLikeStatus] = useState(false as boolean)

    const changeLikedStatus = () => {
        setLikeStatus(!isLiked)
    }

    return(
        <EachPostli>
            <UserDetails>
                <ProfilePicBGContainer>
                    <ProfilePicContainer>
                        <ProfilePic src={profilePic} alt="profile pic"/>
                    </ProfilePicContainer>
                </ProfilePicBGContainer>
                <UserName>{userName}</UserName>
            </UserDetails>
            <PostImageConstainer>
                <PostImage src={postDetails.imageUrl} alt="post image"/>
            </PostImageConstainer>
            <PostDetailsSection>
                <LoveCommentShareContainer>
                    <IconBtton onClick={changeLikedStatus}>
                        {isLiked ? <LoveIconFill fill='#F05161'/> : <LoveIconOutline/>}
                    </IconBtton>
                    <IconBtton>
                        <CommentIcon/>
                    </IconBtton>
                    <IconBtton>
                        <ShareIcon/>
                    </IconBtton>
                </LoveCommentShareContainer>
                <LikesAndCommentsSection>
                    <LikesCount>{isLiked ? likesCount + 1 : likesCount} likes</LikesCount>
                    <Caption>{postDetails.caption}</Caption>
                    <CommentsUl>
                        {comments.map((eachComment) => (
                            <CommentLi key={eachComment.userId}>
                                <CommentedUser>{`${eachComment.userName} `}</CommentedUser>
                                <Comment>{` ${eachComment.comment}`}</Comment>
                            </CommentLi>
                        ))}
                    </CommentsUl>
                    <CreatedAt>{createdAt}</CreatedAt>
                </LikesAndCommentsSection>
            </PostDetailsSection>
        </EachPostli>
    )
}