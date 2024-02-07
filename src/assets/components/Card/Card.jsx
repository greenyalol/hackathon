import React, { useState } from 'react';
import './card.css';
import '../transition.css';
import Button from 'react-bootstrap/Button';
import Score from '../Score/Score';

const Card = ({ handleClick, api }) => {
  const [show, setShow] = useState(true);
  const [correct, setCorrect] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const[points,setPoints]=useState(0)
  const questions = [
    {
      word: 'Question 1',
      options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      correct: 'Answer 1',
    },
    {
      word: 'Question 2',
      options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      correct: 'Answer 2',
    },
    {
      word: 'Question 3',
      options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      correct: 'Answer 3',
    },
    // Add more questions here
  ];
  const handleButtonClick = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === questions[currentQuestionIndex].correct) {
      setPoints(points+1)
      console.log('Correct answer!');
      setCorrect(true);
    } else {
      console.log('Wrong answer!');
    }
  };
  const handleNextQuestion = () => {
    setShow(true);
    setCorrect(false);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <>
      {finished ? (
        <Score points={points} />
      ) : (
        <div
          id={correct ? 'correct-answer-container' : 'container'}
          onClick={() => {
            handleClick();
            setShow(!show);
          }}
        >
          <div id="back">
            {questions[currentQuestionIndex].correct}
            {correct ? <p>Well Done</p> : <p>Don't Worry Next Time</p>}
            <Button onClick={handleNextQuestion}>Next Question</Button>
          </div>
          <div id="front">{questions[currentQuestionIndex].word}</div>
          {show && (
            <div id="container-proposition">
              <div>
                <div>
                  <Button
                    onClick={() => {
                      handleButtonClick(
                        questions[currentQuestionIndex].options[0]
                      );
                    }}
                  >
                    {questions[currentQuestionIndex].options[0]}
                  </Button>
                </div>
                <div>
                  <Button
                    id="btn"
                    onClick={() => {
                      handleButtonClick(
                        questions[currentQuestionIndex].options[1]
                      );
                    }}
                  >
                    {' '}
                    {questions[currentQuestionIndex].options[1]}
                  </Button>
                </div>
              </div>
              <div>
                <div>
                  <Button
                    onClick={() => {
                      handleButtonClick(
                        questions[currentQuestionIndex].options[2]
                      );
                    }}
                  >
                    {' '}
                    {questions[currentQuestionIndex].options[2]}
                  </Button>
                </div>
                <div>
                  <Button
                    id="btn"
                    onClick={() => {
                      handleButtonClick(
                        questions[currentQuestionIndex].options[3]
                      );
                    }}
                  >
                    {' '}
                    {questions[currentQuestionIndex].options[3]}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    
    </>
  );
};

export default Card;
