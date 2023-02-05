import { profileDetailsResponseTypes, profilePostsDetails } from "../Types/types";

class profileDetailsModel implements profileDetailsResponseTypes{
    id: string
    userId: string
    userName: string
    profilePic: string
    followersCount: number
    followingCount: number
    userBio: string
    posts: Array<profilePostsDetails>
    postsCount: number
    stories: Array<profilePostsDetails>

    constructor(data){
        this.id = data.id
        this.userId = data.user_id
        this.userName = data.user_name
        this.profilePic = data.profile_pic
        this.followersCount = data.followers_count
        this.followingCount = data.following_count
        this.userBio = data.user_bio
        this.posts = data.posts
        this.postsCount = data.posts_count
        this.stories = data.stories
    }
}

export {profileDetailsModel}