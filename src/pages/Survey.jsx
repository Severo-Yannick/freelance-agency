import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { URL } from '../utils/constants'
import { Loader } from '../utils/style/Atoms'
import styled from 'styled-components'
import colors from '../utils/style/colors'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

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
    <SurveyContainer>
      <QuestionTitle>Questionnaire 🧮</QuestionTitle>
      <QuestionContent>Question {currentNumber}</QuestionContent>
      {isDataLoading ? <Loader /> : <p>{surveyData[currentNumber]}</p>}
      <LinkWrapper>
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
      </LinkWrapper>
    </SurveyContainer>
  )
}

export default Survey
