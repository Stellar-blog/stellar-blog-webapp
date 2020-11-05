import styled from 'styled-components'

export const Image = styled.img`
  width: 540px;
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

  .username{
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;

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
  }

  .content {
    padding: 0.5rem 1rem;
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
`