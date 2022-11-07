import { useContext } from 'react'
import { SurveyContext } from '../utils/context'

const Results = () => {
  const { answers } = useContext(SurveyContext)

  return (
    <div>
      <h1>Résultats</h1>
      <p>{JSON.stringify(answers)}</p>
    </div>
  )
}

export default Results
