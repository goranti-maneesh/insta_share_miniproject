export interface eachStoryFixturesType {
	"user_id": string
	"user_name": string
	"story_url": string
}

export interface userStoriesFixturesResponseTypes {
	users_stories: Array<eachStoryFixturesType>;
    responseStatus: boolean
}

export interface eachStoryType {
	"userId": string
	"userName": string
	"storyUrl": string
}

export interface userStoriesResponseTypes {
	users_stories: Array<eachStoryType>;
    responseStatus: boolean
}

export interface eachStoryPropType{
	key: string,
	story:{
		userId: string
		userName: string
		storyUrl: string
	}
}