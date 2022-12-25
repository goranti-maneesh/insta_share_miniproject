import { RouteComponentProps } from "react-router-dom";

export interface HeaderProps extends RouteComponentProps{
    onClickState?: () => void, 
    onChangeSearchText?: (string) => void
    searchText?: string
}