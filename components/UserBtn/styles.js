import styled from 'styled-components'

export const ImageContainer = styled.img`
  width: 40px;
  height: 40px;
  padding: 0 1rem;
  cursor: pointer;
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
`