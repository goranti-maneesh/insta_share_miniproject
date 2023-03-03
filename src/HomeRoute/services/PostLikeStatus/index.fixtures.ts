import { PostLikeStatusServiceTypes } from "./index";

import PostLikeStatusFixtures from "../../fixtures/getPostLikeStatus.json";
import { PostLikeStatusResponseTypes } from "../../stores/Types/PostLikeStatusTypes";

import { resolveWithTimeout } from "../../../Common/utils/TestUtils";

export class PostLikeStatusService implements PostLikeStatusServiceTypes {
	getPostLikeStatus = (postId) => {
		return resolveWithTimeout(PostLikeStatusFixtures);
	};
}
