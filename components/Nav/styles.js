import styled from 'styled-components'

export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 8vh;  

  @media only screen and (max-width: 600px) {
    justify-content: space-between;
  }
`