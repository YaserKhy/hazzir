import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home({setQuestions, setScore, setCategory}) {
    
    // Reset some states to its initial value.
    setQuestions();
    setScore(0);
    setCategory(9);

    return (
        <Container className='home'>
            <h1 className='title'> HAZZIR </h1>
            <p className='subtitle mb-5'> The fun quiz game </p>
            <Link to='/categories'><Button className='primar'>Start</Button></Link>
        </Container>
    )
}

export default Home