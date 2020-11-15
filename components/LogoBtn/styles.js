import styled from 'styled-components'

export const Logo = styled.a`
  color: white;
  font-size: 1.5rem;
  font-family: 'Open Sans', sans-serif;

  margin: 0 1rem;
  text-decoration: none;

  ${({ isMobile }) => isMobile && "font-size: 40px; font-weight: bold;"}
`