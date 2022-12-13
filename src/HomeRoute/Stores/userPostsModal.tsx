
class UserPostModal{
    comments: Array<Object>
    createdAt: string
    likesCount: number
    postDetails: Object
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
        this.postDetails = {
            caption: data.post_details.caption,
            imageUrl: data.post_details.image_url
        }
        this.postId = data.post_id
        this.profilePic = data.profile_pic
        this.userId = data.user_id
        this.userName = data.user_name
    }

}

export default UserPostModal