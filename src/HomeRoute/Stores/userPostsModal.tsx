import { eachPostCommentTypes, eachUserPostTypes } from "./Types/UserPostsTypes"

class UserPostModal implements eachUserPostTypes{
    comments: Array<eachPostCommentTypes>
    createdAt: string
    likesCount: number
    postDetails: {
		caption: string;
		imageUrl: string;
	}
    postId: string
    profilePic: string
    userId: string
    userName: string
    
    constructor(data){
        this.comments = data.comments.map((eachComment) => ({
            comment: eachComment.comment,
            userId: eachComment.user_id,
            userName: eachComment.user_name
        }))
        this.createdAt = data.created_at
        this.likesCount = data.likes_count
        console.log(data,">>data.post_details<<")
        this.postDetails = {
            caption: data.post_details.caption,
            imageUrl: data.post_details.image_url
        }
        this.postId = data.post_id
        this.profilePic = data.profile_pic
        this.userId = data.user_id
        this.userName = data.user_name
    }
    created_at: string
    likes_count: number
    post_details: { caption: string; image_url: string }
    post_id: string
    profile_pic: string
    user_id: string
    user_name: string
}

export default UserPostModal