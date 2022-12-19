import {EachPostContainer, UserDetails, ProfilePic, UserName, 
    PostImageConstainer, PostImage, PostDetailsSection, LoveCommentShareContainer,
    IconBtton, LoveIcon, CommentIcon, ShareIcon, LikesAndCommentsSection, LikesCount, Caption, CommentsUl, CommentLi,
    CommentedUser, Comment, CreatedAt} from './styledComponents'

export const EachPost = (props) => {
    const {post} = props
    const {comments, createdAt, likesCount, postDetails, postId, profilePic, userId, userName} = post
    return(
        <EachPostContainer>
            <UserDetails>
                <ProfilePic src={profilePic} alt="profile pic"/>
                <UserName>{userName}</UserName>
            </UserDetails>
            <PostImageConstainer>
                <PostImage src={postDetails.imageUrl} alt="post image"/>
            </PostImageConstainer>
            <PostDetailsSection>
                <LoveCommentShareContainer>
                    <IconBtton>
                        <LoveIcon />
                    </IconBtton>
                </LoveCommentShareContainer>
                <LikesAndCommentsSection>
                    <LikesCount>{likesCount}</LikesCount>
                    <Caption>{postDetails.caption}</Caption>
                    <CommentsUl>
                        {comments.map((eachComment) => (
                            <CommentLi key={eachComment.userId}>
                                <CommentedUser>{eachComment.userName}</CommentedUser>
                                <Comment>{eachComment.comment}</Comment>
                            </CommentLi>
                        ))}
                    </CommentsUl>
                    <CreatedAt>{createdAt}</CreatedAt>
                </LikesAndCommentsSection>
            </PostDetailsSection>
        </EachPostContainer>
    )
}