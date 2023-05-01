import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { chars } from "../utils/RandomChars/RandomChars";
import RandomChars from "../utils/RandomChars/RandomChars";
import Title from "../routes/Title";
import Game from "../routes/Game";
import Result from "../routes/Result";
import GameTitle from "./GameTitle";
import Layout from "../style/Layout";
import TypingGame from "./TypingGame";

export default function App() {

  const GameBoard = styled.div`
    height:480px;
    width:685px;
    background:#1e1e1e;
    border:solid 8px #16825d;
    box-shadow: 5px 5px 2px #1e1e1e;
  `;
  const elaspsedTime = useRef(null);
  const startTime = useRef(null);
  const endTime = useRef(null);
  const navi = useNavigate();
  const [correct, setCorrect] = useState(0)
  const [inCorrect, setInCorrect] = useState(0)
    function startPlaying(){
      RandomChars()
      setCorrect(0)
      setInCorrect(0)
      startTime.current = new Date();  
      navi("/game");
    }
    function backToTitle(){
      navi("/");
    }
    useEffect(() =>{
      const keyDown = (e) =>{
        const code  = e.key;
        if (code.length > 1){
            return;
        }
        if (code === chars[correct]){
            setCorrect(correct+1)
            if(correct >= 9){
              endTime.current = new Date();
              elaspsedTime.current = Math.floor((endTime.current.getTime() - startTime.current.getTime()) / 10);
              navi("/result");
            }
        }else{
            setInCorrect(inCorrect+1);
        }

      }
      document.addEventListener('keydown', keyDown);
      return () => {
          document.removeEventListener('keydown', keyDown);
      };
    },)
  return(
    <>
      <TypingGame>
        <GameTitle>NS-TYPING</GameTitle>
        <Layout top="70px" display="flex" justifyContent="center">
            <GameBoard>
              <Routes>
                <Route path='/' element={<Title startPlaying={startPlaying}/>} />
                <Route path='/game' element={<Game 
                backToTitle={backToTitle} 
                correct={correct} 
                inCorrect={inCorrect}
                chars={chars} 
                /> } />
                <Route path='/result' element={<Result 
                backToTitle={backToTitle}
                inCorrect={inCorrect}
                elaspsedTime={elaspsedTime.current}
                />} />
              </Routes>
            </GameBoard>
        </Layout>
      </TypingGame>
    </>
    
  );
  
}

