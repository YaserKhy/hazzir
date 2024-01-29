import { Button, ToggleButtonGroup, ToggleButton, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

// Data
import Data from '../Data/Data'

function Categories({category, setCategory, fetchQuestions, setQuestions, setScore}) {

    // Reset some states to its initial value.
    setQuestions();
    setScore(0);
    
    // The 2nd argument that'll be passed to `handleCategory` from `ToggleButtonGroup` is the SyntheticEvent object, but we're not using it in this example so we'll omit it.
    // whenever the user changes the radio button, handleCategory will be called.
    const handleCategory = (category) => setCategory(category)

    return (
        <Container className='categories'>
            <h3 className='subtitle mb-5'>Select a Category</h3>
            <ToggleButtonGroup className='catbtngrp' name='options' type="radio" value={category} onChange={handleCategory}>
                {
                    // mapping through the Data imported from Data.js
                    Data.map((cat)=>(
                        <ToggleButton key={cat.id} className='catbtn' id={`tbg-radio-${cat.id}`} value={cat.value}>{cat.category}</ToggleButton>
                    ))
                }
            </ToggleButtonGroup>
            <Row className='mt-5'>
                <Col><Link to='/'><Button variant='secondary' className='scnd'>Back</Button></Link></Col>
                <Col><Link onClick={fetchQuestions} to='/quiz'><Button className='primar'>Play</Button></Link></Col>
            </Row>
        </Container>
    );
}

export default Categories