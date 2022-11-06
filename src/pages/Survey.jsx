import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Survey = () => {
  const { questionNumber } = useParams()
  const [currentNumber, setCurrentNumber] = useState(parseInt(questionNumber))

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {currentNumber}</h2>
      <p>Intitulé de la question ?</p>
      <Link
        to={`/survey/${currentNumber - 1}`}
        style={{ pointerEvents: currentNumber <= 1 ? 'none' : '' }}
        onClick={() => setCurrentNumber(currentNumber - 1)}
      >
        Précédent
      </Link>
      {currentNumber < 10 ? (
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
