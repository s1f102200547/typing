import {Link} from 'react-router-dom';

import Layout from '../../style/Layout';
import Paragraph from '../../style/Paragraph';
import List from '../../style/List';
import Span from '../../style/Span';
import MoveButton from '../../components/MoveButton';
import { Time, Average, CorrectRate } from '../../utils/Calculate/Calculate';

function Result(props){
    return(
        <>
    
                    <Layout display="flex" flexFlow="column" alignItems="center" top="29px">
                        <Paragraph fontSize="50px">結果</Paragraph>
                    </Layout>
                    <Layout top="25px" left="75px">
                        <ul>
                            <List data-testid="time">経過時間: <Span fontWeight="bold">{Time(props.elaspsedTime)}</Span></List>
                            <List data-testid="correct">正しく打ったキーの数: <Span color="#ff0000" fontWeight="bold">10</Span></List>
                            <List data-testid="average">平均キータイプ数: <Span fontWeight="bold">{Average(props.elaspsedTime, props.inCorrect)}</Span>回/秒</List>
                            <List data-testid="inCorrect">ミスタイプ数: <Span color="#0D80CE" fontWeight="bold">{props.inCorrect}</Span></List>
                            <List data-testid="correctRate">正解率: <Span color="#ff0000" fontWeight="bold">{CorrectRate(props.inCorrect)}%</Span></List>
                        </ul>
                    </Layout>
                    <Layout top="60px" display="flex" justifyContent="center">
                        <Link to="/">
                            <MoveButton onClick={props.backToTitle}>タイトルに戻る</MoveButton>
                        </Link>
                    </Layout>
                
        </>
    );
}


export default Result;