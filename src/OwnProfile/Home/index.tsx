import Header from '../../Common/Header';
import {FlexHeading, NoneHeading} from './styledComponents'

const Home = () => {
    
    return(
        <div>
            <Header/>
            {window.innerWidth >= 800 ? <h1>Hello Home</h1> : null}
            <FlexHeading>Display Flex</FlexHeading>
            <NoneHeading>Display None</NoneHeading>
        </div>
        
    )
}

export default Home