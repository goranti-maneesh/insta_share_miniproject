import { useState, useEffect } from 'react'

import { constraints } from '../../../Common/utils/Constraints'

import {useUserPostsHook} from '../../Hooks/UserPosts/useUserPostsHook'


export const Home = () => {
    const [userPostsData, setUserPostsData] = useState()
    const [constraint, setConstraint] = useState(constraints.initial)

    const UserPosts = useUserPostsHook()

    useEffect(() => {
        getPostsData()
    }, [])

    const getPostsData = async () => {
        setConstraint(constraints.loading)
        await UserPosts.fetchUserPosts()
        setUserPostsData(UserPosts.userPostsResponse)
        console.log(UserPosts.userPostsResponse)
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
        </div>
        
    )
}

