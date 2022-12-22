export interface PostLikeStatusResponseTypes{
    message: string
}

export interface PostLikeRequestObjTypes{
    likeStatusObj:{
        like_status: boolean
    },
    postId: string
}