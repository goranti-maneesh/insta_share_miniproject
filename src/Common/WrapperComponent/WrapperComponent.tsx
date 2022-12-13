import {WrapperComponentContainer} from './styledComponents'

export const WrapperComponent = (props) => {

    const {children} = props

    return(
        <WrapperComponentContainer>
            {children}
        </WrapperComponentContainer>
    )
}