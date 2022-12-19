import Loader from "react-loader-spinner";

export const LoaderComponent = (props: {width: number, height: number}) => {
	return (
		<div>
			<Loader type="TailSpin" color="#4094EF" height={props.height} width={props.width} />
		</div>
	);
};
