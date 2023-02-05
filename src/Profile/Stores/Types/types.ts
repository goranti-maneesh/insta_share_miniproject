export interface profilePostsDetails{
    id: string,
    image: string
}

export interface profileStoriesDetails {
    id: string,
    image: string
}

export interface profileDetailsFixturesTypes {
    id: string,
    user_id: string,
    user_name: string,
    profile_pic: string,
    followers_count: number,
    following_count: number,
    user_bio: string,
    posts: Array<profilePostsDetails>,
    posts_count: number,
    stories: Array<profileStoriesDetails>
}

export interface profileAndResponseStatusTypes{
    profile: profileDetailsFixturesTypes,
    responseStatus: boolean
}

export interface UserProfileDetailsAndResponseStatusTypes{
    user_details: profileDetailsFixturesTypes,
    responseStatus: boolean
}

export interface profileDetailsResponseTypes{
    id: string,
    userId: string,
    userName: string,
    profilePic: string,
    followersCount: number,
    followingCount: number,
    userBio: string,
    posts: Array<profilePostsDetails>,
    postsCount: number,
    stories: Array<profileStoriesDetails>
}

export interface profileDetailsResponseStatusTypes{
    profileDetails: profileDetailsResponseTypes,
    responseStatus: boolean
}

export interface profileDetailsPropTypes{
    profileDetails: profileDetailsResponseTypes,
}

