import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: #5843E4;`}
`

const Header = () => {
  return (
    <nav>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/freelances">Freelances</StyledLink>
      <StyledLink to="/survey/1" $isFullLink>
        Faire le test
      </StyledLink>
    </nav>
  )
}

export default Header
