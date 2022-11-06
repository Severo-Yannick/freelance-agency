import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { URL } from '../utils/constants'
import { Loader } from '../utils/style/Atoms'

const Survey = () => {
  const { questionNumber } = useParams()
  const [currentNumber, setCurrentNumber] = useState(parseInt(questionNumber))
  const [isDataLoading, setDataLoading] = useState(false)
  const [surveyData, setSurveyData] = useState({})
  const surveyLength = Object.keys(surveyData).length

  useEffect(() => {
    setDataLoading(true)
    fetch(`${URL}survey`)
      .then((response) => response.json())
      .then((data) => {
        setSurveyData(data.surveyData)
        setDataLoading(false)
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error('Error fetching survey data', error))
  }, [])

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {currentNumber}</h2>
      {isDataLoading ? <Loader /> : <p>{surveyData[currentNumber]}</p>}
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
