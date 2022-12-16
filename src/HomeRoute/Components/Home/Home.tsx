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
        // console.log(UserPosts.userPostsResponse)
    }

    const renderPosts = () => {

    }

    const renderSuccessView = () => {

    }

    const renderFailureView = () => {

    }

    const renderLoadingView = () => {

    }

    const renderOverAllViews = () => {

    }

    return(
        <div>
            <h1>Home</h1>
            <StoriesHook><UserStories/></StoriesHook>
        </div>
        
    )
}

