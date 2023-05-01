import Layout from '../../style/Layout';
import Paragraph from '../../style/Paragraph';
import MoveButton from '../../components/MoveButton';
function Game(props){
    return(
        <>
            <Layout display="flex" flexFlow="column" alignItems="center">
                <Layout top="30px">
                    <Paragraph fontSize="20px">表示された数字または記号のキーを押してください</Paragraph>
                </Layout>
                <Layout>
                    <Paragraph data-testid="char" fontSize="100px">{props.chars[props.correct]}</Paragraph>
                </Layout>
                <Layout display="flex" width="75%">
                    <Paragraph width="100%" fontSize="16px">問題数: 10</Paragraph>
                    <Paragraph data-testid="correct" width="100%" fontSize="16px">正解数: {props.correct}</Paragraph>
                    <Layout top="15px">
                        <MoveButton onClick={props.backToTitle}>タイトルに戻る</MoveButton>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
}

export default Game;