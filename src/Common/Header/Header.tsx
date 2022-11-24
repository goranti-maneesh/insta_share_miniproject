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
	SearchIcon,
	HeaderLink,
	LogoutButton,
	MainHeaderContainer,
} from "./styledComponents";

import { instaHeaderLogo } from "../../constants/LocalConstants";
import {ObjContext} from '../../context/context'

export const Header = () => {

	const objUseContext = useContext(ObjContext)

	const onChangeSearchInput = (event) => {};

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
					<SearchIcon />
					</SearchIconContainer>
				</SearchInputContainer>
				<HeaderLink to="/">Home</HeaderLink>
				<HeaderLink to="/profile">Profile</HeaderLink>
				<LogoutButton>Logout</LogoutButton>
			</RoutesContainer>
			</HeaderContainer>
		</HeaderMainContainer>
	);

	const renderHeaderMobileView = () =>(
		<h1>Hello</h1>
	)

	return <MainHeaderContainer>{objUseContext.screenSizeView.matches ? renderHeaderLargeView() : renderHeaderMobileView()}</MainHeaderContainer>;
};
