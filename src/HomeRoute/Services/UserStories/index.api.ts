import config from '../../../constants/EnvironmentConstants'
import {accessLoginCookie} from '../../../Common/utils/StorageUtils'
import { UserStoriesServiceTypes } from './index'

class UserStoriesService implements UserStoriesServiceTypes{
    getUserStories = async () => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessLoginCookie()}`
            } 
          }   
          
          const url = `${config.INSTA_SHARE_BASE_URL}/stories`
          const response = await fetch(url, options)
          const data = await response.json()
            return {
              ...data,responseStatus: response.ok
            }
    }
}

export {UserStoriesService}