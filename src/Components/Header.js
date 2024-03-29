import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Header() {

    return (
        <Container className='d-flex justify-content-center align-items-center' style={{backgroundColor:'var(--MainColor)', position:'fixed', top:'0'}} fluid>
            <Link to='/' id='title' style={{ fontSize: '1.5rem', letterSpacing: '0.5rem', color:'var(--BgColor)' }}>HAZZIR</Link>
        </Container>
    );
}

export default Header