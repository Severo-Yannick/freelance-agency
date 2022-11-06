import Card from '../components/Card/Card'
import defaultProfile from '../assets/default-profile.png'

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
      <h1>Freelances</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          picture={profile.picture}
          title={profile.name}
        />
      ))}
    </div>
  )
}

export default Freelances
