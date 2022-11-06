import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { URL } from '../utils/constants'

const Survey = () => {
  const { questionNumber } = useParams()
  const [currentNumber, setCurrentNumber] = useState(parseInt(questionNumber))
  const [surveyData, setSurveyData] = useState({})
  const surveyLength = Object.keys(surveyData).length

  useEffect(() => {
    fetch(`${URL}survey`)
      .then((response) => response.json())
      .then((data) => setSurveyData(data.surveyData))
      .catch((error) => console.error('Error fetching survey data', error))
  }, [])

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {currentNumber}</h2>
      <p>{surveyData[currentNumber]}</p>
      <Link
        to={`/survey/${currentNumber - 1}`}
        style={{ pointerEvents: currentNumber <= 1 ? 'none' : '' }}
        onClick={() => setCurrentNumber(currentNumber - 1)}
      >
        Précédent
      </Link>
      {currentNumber < surveyLength ? (
        <Link
          to={`/survey/${currentNumber + 1}`}
          onClick={() => setCurrentNumber(currentNumber + 1)}
        >
          Suivant
        </Link>
      ) : (
        <Link to="/results">Résultats</Link>
      )}
    </div>
  )
}

export default Survey
