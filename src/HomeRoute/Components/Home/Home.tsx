import { useState, useEffect } from 'react'

import { constraints } from '../../../Common/utils/Constraints'

import {useUserPostsHook} from '../../Hooks/UserPosts/useUserPostsHook'


export const Home = (): JSX.Element => {
    const [userPostsData, setUserPostsData] = useState({})
    const [constraint, setConstraint] = useState(constraints.initial)

    const UserPosts = useUserPostsHook()

    useEffect(() => {
        getPostsData()
    }, [])

    const getPostsData = async () => {
        setConstraint(constraints.loading)
        await UserPosts.fetchUserPosts()
        console.log(UserPosts.userPostsResponse)
        setUserPostsData(UserPosts.userPostsResponse)
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

