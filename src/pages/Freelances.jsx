import Card from '../components/Card/Card'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import defaultProfile from '../assets/default-profile.png'
import { URL } from '../utils/constants'
import { useFetch, useTheme } from '../utils/hooks'
import { Loader } from '../utils/style/Atoms'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`
const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`
const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Freelances = () => {
  const { theme } = useTheme()
  const { data, isLoading, error } = useFetch(`${URL}freelances`)
  const { freelancersList } = data

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      <PageTitle theme={theme}>Trouver votre freelance</PageTitle>
      <PageSubtitle theme={theme}>
        Chez Freelance Agency se trouve votre futur prestataire !
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList?.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.jobTitle}
              picture={profile.picture || defaultProfile}
              title={profile.name}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances
