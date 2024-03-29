import React, { useState } from 'react';
import './card.css';
import '../transition.css';
import Button from 'react-bootstrap/Button';
import Score from '../Score/Score';

const Card = ({ handleClick, showFront, setShowFront }) => {
  const [show, setShow] = useState(true);
  const [showoptions, setShowoptions] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const questions = [
    {
      correct: 'belonging to or relating to Israel or its people: ',
      options: ['israeli', 'palestinian', 'enclave', 'ceasefire'],
      word: 'israeli',
    },
    {
      correct: 'belonging to or relating to Palestine: ',
      options: ['palestinian', 'israeli', 'militant', 'counteroffer'],
      word: 'palestinian',
    },
    {
      correct: 'active, determined, and often willing to use force: ',
      options: ['counteroffer', 'palestinian', 'enclave', 'militant'],
      word: 'militant',
    },
    {
      correct:
        'a short interruption in a war or argument, or an agreement to stop fighting or arguing for a period of time: ',
      options: ['counteroffer', 'truce', 'enclave', 'militant'],
      word: 'truce',
    },
    {
      correct:
        'a part of a country that is surrounded by another country, or a group of people who are different from the people living in the surrounding area: ',
      options: ['enclave', 'ceasefire', 'militant', 'palestinian'],
      word: 'enclave',
    },
    {
      correct:
        'an agreement, usually between two armies, to stop fighting in order to allow discussions about peace: ',
      options: ['ceasefire', 'palestinian', 'israeli', 'militant'],
      word: 'ceasefire',
    },
    {
      correct: 'counter-bid : ',
      options: ['militant', 'enclave', 'palestinian', 'counteroffer'],
      word: 'counteroffer',
    },
  ];
  const handleButtonClick = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === questions[currentQuestionIndex].word) {
      setPoints(points + 1);
      console.log('Correct answer!');
      setShowFront(!showFront);
      setCorrect(true);
    } else {
      console.log('Wrong answer!');
      setShowFront(!showFront);
    }
  };
  const handleNextQuestion = () => {
    setShow(true);
    setCorrect(false);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowFront(!showFront);
    } else {
      setFinished(true);
    }
  };

  const resetGame = () => {
    setShow(true);
    setCorrect(false);
    setFinished(false);
    setCurrentQuestionIndex(0);
    setPoints(0);
  };
  return (
    <>
      {finished ? (
        <Score points={points} resetGame={resetGame} />
      ) : (
        <div
          id={correct ? 'correct-answer-container' : 'container'}
          onClick={() => {
            handleClick();
            setShow(!show);
          }}
        >
          <div id="back">
            The Rigth answer is : {questions[currentQuestionIndex].word}
            {correct ? <p>Well Done</p> : <p>Don't Worry Next Time</p>}
            <Button onClick={handleNextQuestion}>Next Question</Button>
          </div>
          <div id="front">{questions[currentQuestionIndex].correct}</div>
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