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

  @media only screen and (max-width: 600px) {
    height: 10vh;
    background: #2C497F;

    .nav-subcontainer{
      padding: 0;
    }
  }
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;

  @media only screen and (max-width: 600px) {
    width: unset;
  }
`

export const ImageContainer = styled.img`
  width: 40px;
  height: 40px;
  padding: 0 1rem;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    width: 55px;
    height: 55px;
    padding-top: 4px;
  }

`

export const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;

  .no-show {
    display: none;
  }

  .show {
    display: block;
  }
`

export const DropDownMenus = styled.div`
  position: absolute;
  background-color: #f1f1f1;
  min-width: 240px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  left: -160px;

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;

    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      width: 20px;
      height: 20px;
      margin-right: 1rem;
    }
  }

  a:hover {
    background-color: #ddd;
  }

  .signout-button{
    border-top: 2px solid #c9c9c9;
  }

  @media only screen and (max-width: 600px) {
    position: fixed;
    width: 100%;
    left: 0;
    top: 10vh;
    height: 90vh;
  }
`