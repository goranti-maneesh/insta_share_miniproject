import { useContext } from "react";
import { withRouter } from "react-router-dom";

import {
	HeaderMainContainer,
	HeaderContainer,
	InstaShareTitle,
	LogoContainer,
	InstaLogo,
	RoutesContainer,
	SearchInputContainer,
	SearchInput,
	SearchIconContainer,
	SearchButton,
	SearchIcon,
	HeaderLink,
	LogoutButton,
	MainHeaderContainer,
} from "./styledComponents";

import {HeaderProps} from '../Stores/Types/HeaderTypes'

import { instaHeaderLogo } from "../constants/LocalConstants";
import {ObjContext} from '../context'
import { accessRemoveCookie } from "../../Common/utils/StorageUtils";

const Header = (props: HeaderProps): JSX.Element => {

	const objUseContext = useContext(ObjContext)

	const {onClickState, onChangeSearchText, searchText} = props

	const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChangeSearchText(event.target.value)
	};

	const onClickLogout = () => {
		accessRemoveCookie(props)
	}

	const onClickSearchButton = () => {
		onClickState()
	}

	const renderHeaderLargeView = () => (
		<HeaderMainContainer>
			<HeaderContainer>
			<LogoContainer>
				<InstaLogo src={instaHeaderLogo} alt="insta-logo" />
				<InstaShareTitle>Insta Share</InstaShareTitle>
			</LogoContainer>
			<RoutesContainer>
				<SearchInputContainer>
					<SearchInput
						type="text"
						placeholder="Search Caption"
						onChange={onChangeSearchInput}
						value={searchText}
					/>
					<SearchIconContainer>
						<SearchButton onClick={onClickSearchButton}>
							<SearchIcon />
						</SearchButton>
					</SearchIconContainer>
				</SearchInputContainer>
				<HeaderLink to="/">Home</HeaderLink>
				<HeaderLink to="/profile">Profile</HeaderLink>
				<LogoutButton onClick={onClickLogout}>Logout</LogoutButton>
			</RoutesContainer>
			</HeaderContainer>
		</HeaderMainContainer>
	);

	const renderHeaderMobileView = () =>(
		<h1>Hello</h1>
	)

	return <MainHeaderContainer>{objUseContext.isDesktopView ? renderHeaderLargeView() : renderHeaderMobileView()}</MainHeaderContainer>;
};

export const HeaderWithRouter = withRouter(Header)