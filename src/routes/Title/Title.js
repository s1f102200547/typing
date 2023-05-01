import MoveButton from '../../components/MoveButton';
import Layout from '../../style/Layout';
import Paragraph from '../../style/Paragraph';

function Title(props){
    
    
    
    return(
        <>

                    <Layout display="flex" flexFlow="column" alignItems="center">
                        <Paragraph fontSize="48px" fontWeight="900" letterSpacing="-3px" transform="scale(0.7, 1)">
                            NS-TYPING
                        </Paragraph>
                        <Layout bottom="25px">
                            <Paragraph>
                                数学・記号専用のタイピング練習ゲーム
                            </Paragraph>
                        </Layout>
                        <br/>
                        <Layout bottom="40px">
                            <MoveButton onClick={props.startPlaying}>プレイする</MoveButton>
                        </Layout>
                    </Layout>
        
            </>
    );
}

export default Title;