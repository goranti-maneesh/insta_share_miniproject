import config from '../../../constants/EnvironmentConstants'
import {accessLoginCookie} from '../../../Common/utils/StorageUtils'

class UserPostsService {
    getUserStories = async () => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessLoginCookie()}`
            } 
          }   
          
          const url = `${config.INSTA_SHARE_BASE_URL}/posts`
          const response = await fetch(url, options)
          console.log(response, "data")
          const data = await response.json()
            return {
              ...data,responseStatus: response.ok
            }
    }
}

export {UserPostsService}