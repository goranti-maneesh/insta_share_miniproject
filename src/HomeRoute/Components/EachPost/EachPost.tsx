import { useState } from 'react'
import {EachPostli, UserDetails, ProfilePicBGContainer, ProfilePicContainer, ProfilePic, UserName, 
    PostImageConstainer, PostImage, PostDetailsSection, LoveCommentShareContainer,
    IconBtton, LoveIconFill, LoveIconOutline, CommentIcon, ShareIcon, LikesAndCommentsSection, LikesCount, Caption, CommentsUl, CommentLi,
    CommentedUser, Comment, CreatedAt} from './styledComponents'

import {eachUserPostPropTypes} from '../../Stores/Types/UserPostsTypes'
import {PostLikeRequestObjTypes} from '../../Stores/Types/PostLikeStatusTypes'
import {usePostLikeStatus} from '../../Hooks/PostLikeStatus/usePostLikeStatusHook'

export const EachPost = (props: eachUserPostPropTypes): JSX.Element => {
    const {post} = props
    const {comments, createdAt, likesCount, postDetails, postId, profilePic, userId, userName} = post

    const [isLiked, setLikeStatus] = useState(false as boolean)

    const postLikeStatus = usePostLikeStatus()
    // console.log(postLikeStatus, 'postLikeStatus')

    const changeLikedStatus = async (): Promise<void> => {
        const likeStatus = !isLiked
        setLikeStatus(likeStatus)

        const postLikeStatusRequestObj: PostLikeRequestObjTypes = {
            likeStatusObj:{
                like_status: likeStatus
            },
            postId
        }

        await postLikeStatus.fetchPostLikeStatus(postLikeStatusRequestObj)
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
                                <CommentedUser>{`${eachComment.userName} `} <Comment>{` ${eachComment.comment}`}</Comment></CommentedUser>
                            </CommentLi>
                        ))}
                    </CommentsUl>
                    <CreatedAt>{createdAt}</CreatedAt>
                </LikesAndCommentsSection>
            </PostDetailsSection>
        </EachPostli>
    )
}