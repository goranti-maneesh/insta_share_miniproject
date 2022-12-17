import { useState, useEffect } from 'react'

import UserStories from '../UserStories/index'

import {usePostsHook} from '../../Hooks/UserPosts/useUserPostsHook'
import {StoriesHook} from '../../Hooks/UserStories/useUserStoriesHook'

import { constraints } from '../../../Common/utils/Constraints'


export const Home = (): JSX.Element => {
    const [userPostsData, setUserPostsData] = useState({})
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
        return(
            <div>
                <StoriesHook><UserStories/></StoriesHook>
                <h1>Each post</h1>
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
            <h1>Home</h1>
            {renderOverAllViews()}
            
        </div>
        
    )
}

