import { Container, Row, Button, Col } from 'react-bootstrap'

function Question({ questions, currentOptions, currentQuestion, score, setScore, selected, setSelected }) {

    // atob() is used for decoding.

    // const [err, setErr] = useState(false)            // State for error message.

    // Set the right class.
    const handleClass = (opt) => {

        // if the option is the selected option and the selected option is the correct answer.
        if (selected === opt && selected === atob(questions[currentQuestion]?.correct_answer)) {
            return 'correct_answer'
        }

        // if the option is the selected option and the selected option is not the correct answer.
        else if (selected === opt && selected !== atob(questions[currentQuestion]?.correct_answer)) {
            return 'wrong_answer'
        }

        // if the option is the correct answer.
        else if (opt === atob(questions[currentQuestion]?.correct_answer)) {
            return 'correct_answer'
        }
    }

    const checkOption = (opt) => {
        setSelected(opt)
        if (opt === atob(questions[currentQuestion]?.correct_answer)) {
            setScore(score + 1)
        }
    }

    return (
        <Container className='d-flex justify-content-center align-items-center flex-column' style={{ fontSize: '1.5rem' }}>
            <Container className='d-flex justify-content-around m-2 labels'>
                <p>Question {currentQuestion + 1}/10</p>
                <p>Category : {atob(questions[currentQuestion].category)}</p>
            </Container>
            {/* {err && <ErrorMessage>{err}</ErrorMessage>} */}
            <Row className='question'>{atob(questions[currentQuestion].question).replace((/[ââ]/g),"'")}</Row>

            <Row>
                {currentOptions && currentOptions.slice(0, 2).map((opt) => (
                    <Col key={opt} className='d-flex justify-content-center'>
                        <Button onClick={() => { checkOption(opt) }} className={`option ${selected && handleClass(opt)}`} key={opt} disabled={selected}>{opt}</Button>
                    </Col>
                ))}
            </Row>

            <Row>
                {currentOptions && currentOptions.slice(2, 4).map((opt) => (
                    <Col key={opt} className='d-flex justify-content-center'>
                        <Button onClick={() => { checkOption(opt) }} className={`option ${selected && handleClass(opt)}`} key={opt} disabled={selected}>{opt}</Button>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Question