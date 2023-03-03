export const userNameRegexExpression = new RegExp("[a-zA-Z0-9]{5,}");

export const passWordRegexExpression = new RegExp(
	/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
);
