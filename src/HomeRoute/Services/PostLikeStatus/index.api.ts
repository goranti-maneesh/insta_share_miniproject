import { PostLikeStatusServiceTypes } from "./index";

import { PostLikeRequestObjTypes } from "../../Stores/Types/PostLikeStatusTypes";

import config from "../../../Common/constants/EnvironmentConstants";
import { accessLoginCookie } from "../../../Common/utils/StorageUtils";

export class PostLikeStatusService implements PostLikeStatusServiceTypes {
	getPostLikeStatus = async (requestObj: PostLikeRequestObjTypes) => {
		const { likeStatusObj, postId } = requestObj;

		const options = {
			method: "POST",
			headers: {
				Authorization: `Bearer ${accessLoginCookie()}`,
			},
			body: JSON.stringify(likeStatusObj),
		};

		const url = `${config.INSTA_SHARE_BASE_URL}/posts/${postId}/like`;
		const response = await fetch(url, options);
		const data = await response.json();
		return {
			...data,
			responseStatus: response.ok,
		};
	};
}
