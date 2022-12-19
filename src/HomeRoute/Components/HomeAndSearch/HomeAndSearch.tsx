import { useState } from "react";

import { HomeAndSearchMainContainer, HomeAndSearchContainer } from "./styledComponents";

import { Home } from "../Home/Home";
import SearchResults from "../SearchResults/SearchResults";

import {PostsHook} from '../../Hooks/UserPosts/useUserPostsHook'

import Header from '../../../Common/Header'
import WrapperComponent from "../../../Common/WrapperComponent";

export const HomeAndSearch = () => {
	const [searchText, setSearchText] = useState("");
	const [searchClickStatus, setSearchClickStatus] = useState(false);

	const onClickState = () => {
		setSearchClickStatus(true);
	};

    const onChangeSearchText = (text: string) => {
        setSearchText(text)
    }

	return (
		<HomeAndSearchMainContainer>
			<Header onClickState={onClickState} onChangeSearchText={onChangeSearchText} searchText={searchText}/>
            <WrapperComponent>
                {searchClickStatus ? <SearchResults /> : <PostsHook><Home/></PostsHook>}
            </WrapperComponent>
		</HomeAndSearchMainContainer>
	);
};
