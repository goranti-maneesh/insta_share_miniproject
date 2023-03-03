import { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
import { imageBaseUrl, instaLogoAltText, loginPageInstaShareText } from "../../constants/LocalConstants";
import { ObjContext } from "../../context";

import { headerConstraints } from "../../utils/Constraints";

import { accessRemoveCookie } from "../../utils/StorageUtils";

const Header = (props: HeaderProps): JSX.Element => {
	const objUseContext = useContext(ObjContext);

	const { t } = useTranslation();

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
					{t<string>("header.homeText")}
				</HeaderLink>
				{path === "/" ? (
					<MobileSearchBtn onClick={displaySearchButton}>
						{t<string>("header.searchText")}
					</MobileSearchBtn>
				) : null}
				<HeaderLink
					to="/my-profile"
					$appliedtext="profile"
					$appliedpath={path === "/my-profile"}>
					{t<string>("header.profileText")}
				</HeaderLink>
				<LogoutButton onClick={onClickLogout}>{t<string>("header.logoutText")}</LogoutButton>
			</RoutesContainer>
			<CancelButton onClick={closeMenu}>
				<CancelIcon />
			</CancelButton>
		</RoutesAndCancelContainer>
	);

	const renderRoutesOrSearch = () => (
		<RoutesAndSearchContainer>
			{constraint === headerConstraints.menu ? renderRoutes() : renderSearchInput()}
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
					<InstaLogo src={`${imageBaseUrl}/v1654572262/Standard_Collection_8_m8rwqb.png`} alt="insta-logo" />
					<InstaShareTitle>{loginPageInstaShareText}</InstaShareTitle>
				</LogoContainer>
				<RoutesContainer>
					{path === "/" ? renderSearchInput() : null}
					<HeaderLink
						to="/"
						$appliedtext="home"
						$appliedpath={path === "/"}>
						{t<string>("header.homeText")}
					</HeaderLink>
					<HeaderLink
						to="/my-profile"
						$appliedtext="profile"
						$appliedpath={path === "/my-profile"}>
						{t<string>("header.profileText")}
					</HeaderLink>
					<LogoutButton onClick={onClickLogout}>{t<string>("header.logoutText")}</LogoutButton>
				</RoutesContainer>
			</HeaderContainer>
		</HeaderDesktopContainer>
	);

	const renderHeaderMobileView = () => (
		<HeaderMobileContainer>
			<LogoAndMenuContainer>
				<LogoContainer>
					<InstaLogo src={`${imageBaseUrl}/v1654572262/Standard_Collection_8_m8rwqb.png`} alt={instaLogoAltText} />
					<InstaShareTitle>{loginPageInstaShareText}</InstaShareTitle>
				</LogoContainer>
				<MenuButton onClick={openMenu}>
					<MenuIcon />
				</MenuButton>
			</LogoAndMenuContainer>
			{constraint === headerConstraints.initial ? null : renderRoutesOrSearch()}
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
