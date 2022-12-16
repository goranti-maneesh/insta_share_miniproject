export interface eachStoryFixturesType {
	"user_id": string
	"user_name": string
	"story_url": string
}

export interface userStoriesFixturesResponseTypes {
	usersStories: Array<eachStoryFixturesType>;
    responseStatus: boolean
}

export interface eachStoryType {
	"userId": string
	"userName": string
	"storyUrl": string
}

export interface userStoriesResponseTypes {
	usersStories: Array<eachStoryType>;
    responseStatus: boolean
}