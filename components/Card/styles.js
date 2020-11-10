import styled from 'styled-components'

export const Image = styled.img`
  width: 540px;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  padding: 0 !important;
`

export const CardContainer = styled.div`
  margin: 1rem; 
  background: white;
  font-family: 'Open Sans', sans-serif;
  width: 540px;
  border-radius: 0.5rem;

  div {
    padding: 0 1rem;
  }

  .first-row{
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .user-info{
      display: flex;
      align-items: center;
    }

    .followButton{
      font-family: 'Roboto',sans-serif;
      font-weight: bold;
      color: #b74ae3;
      font-size: 0.8rem;
      cursor: pointer;
    }

    .followButton:hover {
      color: #32497e;
    }
  }

  .name {
    font-weight: bold;
    margin: 1rem 0;
  }

  .content {
    padding: 0.5rem 1rem;
  }

  .hashtags {
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0;
    flex-wrap: wrap;

    .tag {
      margin: 0.5rem 0.5rem 0.5rem 0;
      background: #22A8B6;
      height: auto;
      padding: 0.5rem;
      border-radius: 2rem;
    }
  }

  .buttonbox{
    display: flex;
    margin: 0.5rem 0;

    .like{
      background: url(/heart-empty.svg);
      width:21px;
      height:21px;
      background-position: center;
      background-repeat: no-repeat;
      cursor: pointer;
    }

    .like:hover {
      background: url(/heart-red.svg);
      width:21px;
      height:21px;
      background-position: center;
      background-repeat: no-repeat;
      cursor: pointer;
    }

    .comment{
      background: url(/comment.svg);
      width:21px;
      height:21px;
      background-position: center;
      background-repeat: no-repeat;
      cursor: pointer;
    }
  }

  .not-available{
    color: #c9c9c9;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0 0 5px 0;
    border-radius: unset;
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

  img {
    cursor : pointer;
  }
`

export const DropDownMenus = styled.div`
  position: absolute;
  background-color: #f1f1f1;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  left: -60px;
  padding: 0!important;

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
`