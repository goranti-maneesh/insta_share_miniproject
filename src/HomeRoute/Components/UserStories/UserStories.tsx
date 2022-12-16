import { useEffect, useState } from "react"

import {useStoriesHook} from '../../Hooks/UserStories/useUserStoriesHook'

import { constraints } from "../../../Common/utils/Constraints"

export const UserStories = () => {

    const [userStoriesData, setUserStoriesData] = useState({})
    const [constraint, setConstraint] = useState(constraints.initial)

    const UsersStories = useStoriesHook()
    
    useEffect(() => {
        getStoriesData()
    }, [])

    const getStoriesData = async () => {
        await UsersStories.fetchUserStories()
        console.log(UsersStories.userStoriesResponse)
    }

    return(
        <h1>UserStories</h1>
    )

}