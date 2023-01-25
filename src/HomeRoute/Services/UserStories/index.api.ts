import { UserStoriesServiceTypes } from './index'

import config from '../../../Common/constants/EnvironmentConstants'
import {accessLoginCookie} from '../../../Common/utils/StorageUtils'

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
            return {
              ...data,responseStatus: response.ok
            }
    }
}