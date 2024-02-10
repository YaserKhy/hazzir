import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home({ setQuestions, setScore, setCategory }) {

    // Reset some states to its initial value.
    setQuestions();
    setScore(0);
    setCategory(9);

    return (
        <Container className='home'>
            <Container fluid id='LogoTitle' className='d-flex justify-content-center align-items-center ps-4 mb-3'>
                <Image className='me-3' src={`${process.env.PUBLIC_URL}/Logo2.png`} alt='HazzirLogo' width={110} height={110} />
                <h1 id='title'> HAZZIR </h1>
            </Container>
            <p id='subtitle' className='w-25 mb-5 text-center' style={{lineHeight:'0rem', borderBottom:'1px solid var(--MainColor)'}}><span className='px-2' style={{background:'var(--BgColor)'}}> The fun quiz game </span></p>
            <Link to='/categories'><Button className='primar mt-3'>Start</Button></Link>
        </Container>
    )
}

export default Home