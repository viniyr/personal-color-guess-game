import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Button from './components/Button';

function App() {

  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(undefined)

  const generateButtonColorsLabel = () => {
    const rightColor = generateRandomHexColor();
    setColor(rightColor);
    setAnswers([rightColor, generateRandomHexColor(), generateRandomHexColor()].sort( () => 0.5 - Math.random()));
  }

  useEffect(()=> { 
    generateButtonColorsLabel();
  }, []);

  const handleAnswerClicked = (answer) => { 
    if(answer === color) { 
      setResult(true);
      generateButtonColorsLabel();
    } else { 
      setResult(false);
    }
  }

  return (
    <MainContainer>

      <ColorToGuess theme={{main: color}}></ColorToGuess>

      <ButtonContainer>
          {answers.map((answer) => { 
            return <Button onClick={()=> { handleAnswerClicked(answer)}} buttonLabel={answer}></Button>
          })}
      </ButtonContainer>

      {result  === true && <><RightAnswer>Acertou! Parabéns 👏</RightAnswer> </>}
      {result === false && <><WrongAnswer>Errou! Tente novamente. </WrongAnswer></>}

    </MainContainer>
  );
}

export default App;

function generateRandomHexColor(base = 16, length = 6) { 
  const max = Math.pow(base, length);
  const decimal = Math.floor(Math.random() * max);
  const hexString = decimal.toString(base).padStart(length, '0');

  return '#'+hexString.toUpperCase();
} 

const MainContainer = styled.div`
  margin: 10vh auto;
  text-align: center;
  width: 30vw;
  height: 40vh;
`

const ColorToGuess = styled.div`
  background-color: ${props => props.theme.main};
  width: 100%;
  height: 100%;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`

const WrongAnswer = styled.div`
  margin-top: 30px;
  color: red;
  font-family: cursive;
  font-size: 36px;
`
const RightAnswer = styled.div`
  margin-top: 30px;
  color: green;
  font-family: cursive;
  font-size: 36px;
`