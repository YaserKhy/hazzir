import React, { useEffect, useState } from 'react'
import { Container, Spinner, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Question from './Question'

function Quiz({ questions, score, setScore }) {

    const [currentQuestion, setCurrentQuestion] = useState(0)               // State for the current question number.
    const [currentOptions, setCurrentOptions] = useState()                  // State for the current question options 'Array'.
    const [selected, setSelected] = useState()                              // State for the selected option 'String'.

    // Function to shuffle options to prevent the correct answer being in the same place for all questions.
    const shuffleOptions = (optionsArray) => {
        for (let i = 0; i < optionsArray.length; i++) {
            // decode each option from base64 to binary
            optionsArray[i] = atob(optionsArray[i])
        }
        return optionsArray.sort(() => Math.random() - 0.5)
    }

    // Function to move to next question.
    const handleNext = () => { if (currentQuestion < 10) setCurrentQuestion(currentQuestion + 1) }

    // This useEffect will take place with every change on the currentQuestion and questions states.
    useEffect(() => {
        // if questions isnt null then set current options to whatever returned from shuffleOptions.
        setCurrentOptions(questions && shuffleOptions(
            [
                questions[currentQuestion]?.correct_answer,
                ...questions[currentQuestion]?.incorrect_answers
            ]
        ))
        // Since the current question is changed then remove selection by setting selected to null.
        setSelected()
    }, [questions, currentQuestion])

    return (
        <Container className='d-flex justify-content-center align-items-center flex-column' style={{ minHeight: '90vh' }}>
            {/* if questions isnt null then do whatever in the empty tag, else render the spinner */}
            {
                questions ?
                    <>
                        <Question questions={questions} currentOptions={currentOptions} currentQuestion={currentQuestion} score={score} setScore={setScore} selected={selected} setSelected={setSelected} />
                        <Row className='mt-5'>
                            <Col><Link to='/'><Button variant='danger' className='quitbtn'>Quit</Button></Link></Col>
                            {currentQuestion !== 9 && <Col><Button id='nextq' className='primar' onClick={handleNext} disabled={!selected}> Next Question </Button></Col>}

                            {/* When last question is reached, direct to score page */}
                            {currentQuestion === 9 && <Col><Link to='/score' disabled={!selected}><Button className='primar' disabled={!selected}> View Score </Button></Link></Col>}
                        </Row>
                    </>
                    :
                    <Container className='w-auto px-4 py-5 d-flex flex-column justify-content-center align-items-center text-center' style={{
                        backgroundColor:'var(--FooterColor)',
                        color:'var(--MainColor)',
                        borderRadius:'2rem'}}>
                        <Spinner animation='border' role='status' className='mb-3'></Spinner>
                        <h4 style={{margin:'0'}}>Please wait...</h4>
                    </Container>
            }
        </Container>
    )
}

export default Quiz