import {PostLikeStatusServiceTypes} from './index'

import PostLikeStatusFixtures from '../../Fixtures/getPostLikeStatus.json'
import { PostLikeStatusResponseTypes } from '../../Stores/Types/PostLikeStatusTypes'

import { resolveWithTimeout } from '../../../Common/utils/TestUtils'

export class PostLikeStatusService implements PostLikeStatusServiceTypes{
    getPostLikeStatus = (postId) => {
        return(
            resolveWithTimeout(PostLikeStatusFixtures)
        )
    }
}