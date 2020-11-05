import styled from 'styled-components'

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  border-bottom: 2px double #363d4d;

  .nav-subcontainer{
    display: flex;
    justify-content:space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 0 60px;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`