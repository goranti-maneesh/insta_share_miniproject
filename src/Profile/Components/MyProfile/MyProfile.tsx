import { useEffect, useState } from "react"

import Profile from "../Profile"

import {useProfileDetailsHook} from '../../Hooks/ProfileDetails/useProfileDetailsHook'
import {profileDetailsResponseStatusTypes} from '../../Stores/Types/types'

import Header from "../../../Common/Header"
import { constraints } from "../../../Common/utils/Constraints"
import Failure from "../../../Common/Failure"
import Loader from "../../../Common/Loader"
import WrapperComponent from "../../../Common/WrapperComponent"

export const MyProfile = () => {

    const profileDetails = useProfileDetailsHook()

    const [constraint, setConstraint] = useState(constraints.initial as string);
    const [data, setData] = useState({} as profileDetailsResponseStatusTypes)

    const getProfileDetailsData = async () => {

        setConstraint(constraints.loading)

        await profileDetails.fetchProfileDetails()

        if(profileDetails.profileDetailsResponse.responseStatus){
            setData(profileDetails.profileDetailsResponse)
            setConstraint(constraints.success)
        }
        else{
            setConstraint(constraints.failure)
        }


    }

    useEffect(() => {
        getProfileDetailsData()
    }, [])

    const overAllViews = (): JSX.Element => {
        switch(constraint){
            case "SUCCESS":
                return renderProfileDetails()
            case "LOADING":
                return renderLoader()
            case "FAILURE":
                return renderErrorView()
        }
    }

    const renderLoader = (): JSX.Element => (
        <Loader width={53} height={53} />
    )

    const renderErrorView = (): JSX.Element => (
        <Failure getPostsData={getProfileDetailsData} />
    )

    const renderProfileDetails = (): JSX.Element => (
        <Profile profileDetails={data.profileDetails}/>
    )

    return(
        <div>
            <Header />
            <WrapperComponent>
                {overAllViews()}
            </WrapperComponent>
        </div>
    )
}