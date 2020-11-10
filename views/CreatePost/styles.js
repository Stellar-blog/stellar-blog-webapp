import styled from 'styled-components'

export const HashTagsContainer = styled.section`
    display: flex;
    flex-direction: column;

    input {
        width: 40%;
    }
`

export const DisplayTagsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
`

export const TagContainer = styled.div`
    margin: 0.5rem 1rem 0.5rem 0;
    background: #22A8B6;
    height: auto;
    padding: 0.5rem;
    border-radius: 2rem;

    .delete-button{
        margin-left: 0.5rem;
        cursor: pointer;
    }

    .delete-button:hover {
        color: red;
    }
`

export const Form = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 50%;
  width: 540px;

  input {
    padding: 0.8rem;
    border: transparent;
    margin: 0.5rem 0;
  }

  input:active {
    outline: none;
  }

  input:focus {
    outline: none;
  }

  button {
    padding: 0.4rem 1rem;
    margin: 1rem 0;
  
    color: white;
    font-size: medium;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
  
    cursor: pointer;
    border: 3px solid #4f2361;
    border-radius: 0.2rem;
    background: #4f2361;
  
    text-decoration: none;
  }

  button:active, button:hover, button:focus {
    outline: 2px solid #7f5281;
  }

  @media only screen and (max-width: 600px) {
    min-width: unset;
    width: 95%;
  }
`