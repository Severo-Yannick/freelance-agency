import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'

export const StyledLink = styled(Link)`
  padding: 15px;
  color: ${colors.secondary};
  text-decoration: none;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
