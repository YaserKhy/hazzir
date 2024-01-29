// Components
import Header from './Components/Header.js'
import Home from './Components/Home.js'
import Categories from './Components/Categories.js'
import Quiz from './Components/Quiz.js'
import Score from './Components/Score.js'
import Footer from './Components/Footer.js'

// Styling
import './App.css';

// Hooks
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';
import { useState } from 'react'

// Libraries
import axios from 'axios'

// to structure everything related to routing that isnt defining routes
const Root = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

function App() {

  const [category, setCategory] = useState(9);              // state for the chosen category. 
  const [questions, setQuestions] = useState();             // state for the fetched questions.
  const [score, setScore] = useState(0);                    // state for the score.

  const fetchQuestions = async () => {
    
    // First, define the url.
    const URL = `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple&encode=base64`

    // Then, fetch the data.
    const { data } = await axios.get(URL)

    // Lastly, set the questions.
    setQuestions(data.results)
  }

  // Creating the router which contains all the website routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>

        {/* Home Route ( / ) */}
        <Route
          index
          element={
            <Home
              setQuestions={setQuestions}
              setScore={setScore}
              setCategory={setCategory}
            />
          }>
        </Route>

        {/* Categories Route ( /categories ) */}
        <Route
          path='/categories'
          element={
            <Categories
              category={category}
              setCategory={setCategory}
              fetchQuestions={fetchQuestions}
              setQuestions={setQuestions}
              setScore={setScore}
            />
          }>
        </Route>

        {/* Quiz Route ( /quiz ) */}
        <Route
          path='/quiz'
          element={
            <Quiz
              questions={questions}
              setQuestions={setQuestions}
              score={score}
              setScore={setScore}
            />
          }>
        </Route>

        {/* Score Route ( /score ) */}
        <Route
          path='/score'
          element={
            <Score
              score={score}
            />
          }>
        </Route>

      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;