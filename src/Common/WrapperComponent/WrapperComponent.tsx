import {WrapperComponentContainer, WrapperMainComponent} from './styledComponents'

export const WrapperComponent = (props: { children: JSX.Element }) => {

    const {children} = props

    return(
        <WrapperMainComponent>
            <WrapperComponentContainer>
                {children}
            </WrapperComponentContainer>
        </WrapperMainComponent>
    )
}