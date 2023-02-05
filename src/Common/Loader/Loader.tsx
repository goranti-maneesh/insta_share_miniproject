import Loader from "react-loader-spinner";

import {LoaderContainer} from './styledComponents'

export const LoaderComponent = (props: {width?: number, height?: number}): JSX.Element => {
	return (
		<LoaderContainer>
			<Loader type="TailSpin" color="#4094EF" height={props.height} width={props.width} />
		</LoaderContainer>
	);
};
