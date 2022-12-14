import { resolveWithTimeout } from "../../../Common/utils/TestUtils"

import usersPostsFixtures from '../../Fixtrures/getUserPostsResponse.json'

import {UserPostsServiceTypes} from './index'

class UserPostsService implements UserPostsServiceTypes{
    getUserPosts = () => {
        return resolveWithTimeout(usersPostsFixtures)
    }
}

export {UserPostsService}