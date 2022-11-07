import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks'
import colors from './colors'

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }

  body {
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? colors.dark : colors.white};
    margin: 0;
  }
`

const GlobalStyle = () => {
  const { theme } = useTheme()
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
