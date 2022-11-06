import Card from '../components/Card/Card'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import defaultProfile from '../assets/default-profile.png'

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

const freelanceProfiles = [
  {
    name: 'John Doe',
    jobTitle: 'Devops',
    picture: 'https://avatars.githubusercontent.com/u/78726433?v=4',
  },
  {
    name: 'Jane Dane',
    jobTitle: 'Développeur frontend',
    picture: defaultProfile,
  },
  {
    name: 'Yannick Severo',
    jobTitle: 'Développeur Fullstack',
    picture: 'https://avatars.githubusercontent.com/u/78726433?v=4',
  },
]

const Freelances = () => {
  return (
    <div>
      <PageTitle>Trouver votre freelance</PageTitle>
      <PageSubtitle>
        Chez Freelance Agency se trouve votre futur prestataire !
      </PageSubtitle>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  )
}

export default Freelances
