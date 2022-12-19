import { useState, useEffect } from 'react'

import UserStories from '../UserStories/index'
import EachPost from '../EachPost'

import {usePostsHook} from '../../Hooks/UserPosts/useUserPostsHook'
import {StoriesHook} from '../../Hooks/UserStories/useUserStoriesHook'
import { userPostsResponseTypes } from '../../Stores/Types/UserPostsTypes'

import { constraints } from '../../../Common/utils/Constraints'

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
                <ul>
                    {userPostsData.posts.map((eachPost) => (
                        <EachPost key={eachPost.userId} post={eachPost}/>
                    ))}
                </ul>
            </div>
        )
    }

    const renderFailureView = () => {
        return(
            <h1>Failure</h1>
        )
    }

    const renderLoadingView = () => {
        return(
            <h1>Loading</h1>
        )
    }

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
            <h1>Home</h1>
            
        </div>
        
    )
}

