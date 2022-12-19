import { useState, useEffect } from 'react'

import {EachPostUl, PostsLoader} from './styledComponents'

import UserStories from '../UserStories/index'
import EachPost from '../EachPost'

import {usePostsHook} from '../../Hooks/UserPosts/useUserPostsHook'
import {StoriesHook} from '../../Hooks/UserStories/useUserStoriesHook'
import { userPostsResponseTypes } from '../../Stores/Types/UserPostsTypes'

import { constraints } from '../../../Common/utils/Constraints'
import Loader from '../../../Common/Loader/index'
import Failure from '../../../Common/Failure/index'

export const Home = (): JSX.Element => {
    const [userPostsData, setUserPostsData] = useState({} as userPostsResponseTypes)
    const [constraint, setConstraint] = useState(constraints.initial)

    const UserPosts = usePostsHook()

    useEffect(() => {
        getPostsData()
    }, [])

    const getPostsData = async () => {
        setConstraint(constraints.loading)
        await UserPosts.fetchUserPosts()
        setUserPostsData(UserPosts.userPostsResponse)
        setConstraint(constraints.success)
        // console.log(UserPosts.userPostsResponse)
    }

    const renderPosts = () => {

    }

    const renderSuccessView = () => {
        console.log(userPostsData, 'userPostsData')
        return(
            <div>
                <StoriesHook><UserStories/></StoriesHook>
                <EachPostUl>
                    {userPostsData.posts.map((eachPost) => (
                        <EachPost key={eachPost.postId} post={eachPost}/>
                    ))}
                </EachPostUl>
            </div>
        )
    }

    const renderFailureView = () => <Failure getPostsData={getPostsData}/>

    const renderLoadingView = () => (
        <PostsLoader>
            <Loader width={53} height={53}/>
        </PostsLoader>
    )

    const renderOverAllViews = () => {
        switch(constraint){
            case "SUCCESS":
                return renderSuccessView()
            case "LOADING":
                return renderLoadingView()
            case "FAILURE":
                return renderFailureView()
        }
    }

    return(
        <div>
            {renderOverAllViews()}
        </div>
        
    )
}

