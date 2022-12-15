export class UserStoryModal {
    userId: string
    userName: string
    storyUrl: string
    
    constructor(data){
        this.userId = data.user_id
        this.userName = data.user_name
        this.storyUrl = data.story_url
    }
}