import { observable, action } from 'mobx';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { APIStatus, API_INITIAL} from '@ib/api-constants/lib/index';
import UserPostModal from '../userPostsModal'

class UserPostsStores{
    @observable userPostApiService
    @observable responseStatus = API_INITIAL
    @observable userPostsResponse = null

    constructor(userPostServiceApiInstance ){
        this.userPostApiService = userPostServiceApiInstance
    }

    getUserPostsResponse = (response) => {
        console.log(response)
        const modalData = response.posts.map((eachPost) => new UserPostModal(eachPost))
        this.userPostsResponse = modalData
    }

    getUserPostsStatus = (responseStatus: APIStatus) => {
        this.responseStatus = responseStatus
    }

    fetchUserPosts = () => {
        const postsResponse = this.userPostApiService.getUserStories()
        return bindPromiseWithOnSuccess(postsResponse).to(
            this.getUserPostsStatus, (response) => {
                this.getUserPostsResponse(response)
            }
        )
    }
}

export {UserPostsStores}