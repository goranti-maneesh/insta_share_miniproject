import { useContext, useState } from "react";
import { withRouter } from "react-router-dom";

import {
	HeaderDesktopContainer,
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
	HeaderMobileContainer,
	LogoAndMenuContainer,
	MenuButton,
	MenuIcon,
	RoutesAndSearchContainer,
	RoutesAndCancelContainer,
	MobileSearchBtn,
	CancelButton,
	CancelIcon,
} from "./styledComponents";

import { HeaderProps } from "../../stores/types";
import { instaHeaderLogo } from "../../constants/LocalConstants";
import { ObjContext } from "../../context";

import { headerConstraints } from "../../utils/Constraints";

import { accessRemoveCookie } from "../../utils/StorageUtils";

const Header = (props: HeaderProps): JSX.Element => {
	const objUseContext = useContext(ObjContext);

	const { onClickState, onChangeSearchText, searchText } = props;

	const [constraint, setConstraint] = useState(
		headerConstraints.initial as string,
	);

	const { match } = props;
	const { path } = match;

	const onChangeSearchInput = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		onChangeSearchText(event.target.value);
	};

	const onSearchEnterKey = (event) => {
		console.log(event)
		if(event.key === 'Enter'){
			onClickState();
		}
	}

	const onClickLogout = () => {
		accessRemoveCookie(props);
	};

	const onClickSearchButton = () => {
		onClickState();
	};

	const openMenu = () => {
		setConstraint(headerConstraints.menu);
	};

	const closeMenu = () => {
		setConstraint(headerConstraints.initial);
	};

	const displaySearchButton = () => {
		setConstraint(headerConstraints.search);
	};

	const renderRoutes = (): JSX.Element => (
		<RoutesAndCancelContainer>
			<RoutesContainer>
				<HeaderLink
					to="/"
					$appliedtext="home"
					$appliedpath={path === "/"}>
					Home
				</HeaderLink>
				{path === "/" ? (
					<MobileSearchBtn onClick={displaySearchButton}>
						Search
					</MobileSearchBtn>
				) : null}
				<HeaderLink
					to="/my-profile"
					$appliedtext="profile"
					$appliedpath={path === "/my-profile"}>
					Profile
				</HeaderLink>
				<LogoutButton onClick={onClickLogout}>Logout</LogoutButton>
			</RoutesContainer>
			<CancelButton onClick={closeMenu}>
				<CancelIcon />
			</CancelButton>
		</RoutesAndCancelContainer>
	);

	const renderRoutesOrSearch = () => (
		<RoutesAndSearchContainer>
			{constraint === "MENU" ? renderRoutes() : renderSearchInput()}
		</RoutesAndSearchContainer>
	);

	const renderSearchInput = () => (
		<SearchInputContainer>
			<SearchInput
				type="text"
				placeholder="Search Caption"
				onChange={onChangeSearchInput}
				onKeyDown={onSearchEnterKey}
				value={searchText}
			/>
			<SearchIconContainer>
				<SearchButton onClick={onClickSearchButton}>
					<SearchIcon />
				</SearchButton>
			</SearchIconContainer>
		</SearchInputContainer>
	);

	const renderHeaderLargeView = () => (
		<HeaderDesktopContainer>
			<HeaderContainer>
				<LogoContainer>
					<InstaLogo src={instaHeaderLogo} alt="insta-logo" />
					<InstaShareTitle>Insta Share</InstaShareTitle>
				</LogoContainer>
				<RoutesContainer>
					{path === "/" ? renderSearchInput() : null}
					<HeaderLink
						to="/"
						$appliedtext="home"
						$appliedpath={path === "/"}>
						Home
					</HeaderLink>
					<HeaderLink
						to="/my-profile"
						$appliedtext="profile"
						$appliedpath={path === "/my-profile"}>
						Profile
					</HeaderLink>
					<LogoutButton onClick={onClickLogout}>Logout</LogoutButton>
				</RoutesContainer>
			</HeaderContainer>
		</HeaderDesktopContainer>
	);

	const renderHeaderMobileView = () => (
		<HeaderMobileContainer>
			<LogoAndMenuContainer>
				<LogoContainer>
					<InstaLogo src={instaHeaderLogo} alt="insta-logo" />
					<InstaShareTitle>Insta Share</InstaShareTitle>
				</LogoContainer>
				<MenuButton onClick={openMenu}>
					<MenuIcon />
				</MenuButton>
			</LogoAndMenuContainer>
			{constraint === "INITIAL" ? null : renderRoutesOrSearch()}
		</HeaderMobileContainer>
	);

	return (
		<MainHeaderContainer>
			{objUseContext.isDesktopView
				? renderHeaderLargeView()
				: renderHeaderMobileView()}
		</MainHeaderContainer>
	);
};

export const HeaderWithRouter = withRouter(Header);
