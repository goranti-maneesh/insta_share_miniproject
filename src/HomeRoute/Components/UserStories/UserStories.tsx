import { useEffect, useState } from "react"
import { constraints } from "../../../Common/utils/Constraints"

export const UserStories = () => {

    const [userStoriesData, setUserStoriesData] = useState({})
    const [constraint, setConstraint] = useState(constraints.initial)
    
    useEffect(() => {
        getStoriesData()
    }, [])

    const getStoriesData = () => {
    }

}