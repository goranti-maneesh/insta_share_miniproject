import { withRouter } from "react-router-dom";
import { useContext } from "react";

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

import { instaHeaderLogo } from "../../constants/LocalConstants";
import {ObjContext} from '../context/context'
import { accessRemoveCookie } from "../../Common/utils/StorageUtils";

const Header = (props) => {

	const objUseContext = useContext(ObjContext)

	const {onClickState, onChangeSearchText} = props

	const onChangeSearchInput = (event) => {
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

	return <MainHeaderContainer>{objUseContext.screenSizeView.matches ? renderHeaderLargeView() : renderHeaderMobileView()}</MainHeaderContainer>;
};

export const HeaderWithRouter = withRouter(Header)