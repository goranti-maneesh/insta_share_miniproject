import {WrapperComponentContainer} from './styledComponents'

export const WrapperComponent = (props: { children: JSX.Element }) => {

    const {children} = props

    return(
        <WrapperComponentContainer>
            {children}
        </WrapperComponentContainer>
    )
}