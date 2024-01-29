import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Score({ score }) {

    const [msg, setMsg] = useState('')

    useEffect(() => {
        if (score <= 3) setMsg('Bad Luck Today...')
        else if (score > 3 && score <= 7) setMsg('Not Bad !')
        else if (score > 7 && score <= 9) setMsg('Good Job !')
        else if (score === 10) setMsg('Excellent !')
    }, [score])


    return (
        <Container className='d-flex flex-column justify-content-center align-items-center' style={{minHeight:'90vh'}}>
            <Container className='d-flex flex-column justify-content-center align-items-center text-center' style={{color:'var(--MainColor)'}}>
                <h3>{msg}</h3>
                <h1 className='mb-5'>{`You Got ${score} out of 10 !`}</h1>
                <Link to='/categories'><Button className='primar'>Play Again</Button></Link>
            </Container>
        </Container>
    )
}

export default Score