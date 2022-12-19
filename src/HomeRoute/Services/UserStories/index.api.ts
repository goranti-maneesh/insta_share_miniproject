import config from '../../../constants/EnvironmentConstants'
import {accessLoginCookie} from '../../../Common/utils/StorageUtils'
import { UserStoriesServiceTypes } from './index'

export class UserStoriesService implements UserStoriesServiceTypes{
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
          console.log(data, "data")
            return {
              ...data,responseStatus: response.ok
            }
    }
}