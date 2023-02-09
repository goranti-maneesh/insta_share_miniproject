import { RouteComponentProps } from "react-router-dom";

export interface FailureCompTypes {
	getPostsData: () => void;
}

export interface HeaderProps extends RouteComponentProps {
	onClickState?: () => void;
	onChangeSearchText?: (string) => void;
	searchText?: string;
}

export interface HeaderLinkStylePropsType {
	$appliedtext: string;
	$appliedpath: boolean;
}
