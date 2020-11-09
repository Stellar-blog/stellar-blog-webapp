import styled from 'styled-components'

const theme = {
    primaryFont: "'Open Sans', sans-serif",
    secondaryFont: "'Roboto', sans-serif",
    primaryColor: "#4f2361",
    secondaryColor: "",
    whiteColor: "",
    textColor: "",
}

export const Typography = styled.p`
  color: white;
  margin: 1rem;

  ${({ size }) => size === "big" && "font-size:2.8rem; font-family: 'Open Sans', sans-serif;"};
  ${({ size }) => size === "medium" && "font-size:1.5rem;"};
`

export const Button = styled.a`
  padding: 0.4rem 1rem;
  margin: 0 1rem;

  color: white;
  font-size: medium;
  font-family: 'Roboto', sans-serif;
  font-weight: bolder;

  cursor: pointer;
  border: 3px solid #4f2361;
  border-radius: 0.2rem;
  background: #4f2361;

  ${({ type }) => type === "no-box" && "background:none; border: none;"};

  text-decoration: none;
  ;
`

export const Main = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(/stellar-blog-bg1.webp);
  background-position: center;
  background-size: cover;
  height: 100vh;
`

export const DashboardMain = styled.div`
  background: #2C497F;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 90vh;
  max-width: 450px;
  margin: auto;

  ${({ type }) => type === "post" && "height: unset;margin-top: 2rem;"}
  ${({ type }) => type === "dashboard" && "height: unset; text-align:unset;margin-top: 2rem;"}

  .no-posts{
    width: 100%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 50%;

  ${({ type }) => type === "post" && "width: 540px;"}

  input, textarea {
    padding: 0.8rem;
    border: transparent;
    margin: 0.5rem 0;
  }

  input:active, textarea:active {
    outline: none;
  }

  input:focus, textarea:focus {
    outline: none;
  }

  textarea {
    height: 10rem;
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
`

export const InfoMessage = styled.p`
  margin: 0.2rem;
  color: white;
`

export const InfoLink = styled.p`
  margin: 0.2rem;
  color: white;
  text-decoration: underline;
  cursor: pointer;
  margin: 0 auto;

  &:hover {
    text-decoration: none;
  }
`

export const ErrorMessage = styled.p`
  margin: 0.2rem;
  color: tomato;
`

export const FlexBasicContainer = styled.div`
    display:flex;
    margin: 40px auto 0;
    width: 100%;
    max-width: 950px;

    section:nth-child(1) {
        display: flex;
        width: 100%;
        max-width: 600px;
    }

    section:nth-child(2) {
        display: flex;
        width: 100%;
        max-width: 300px;
        margin-left:50px;
    }

    @media screen and (max-width: 1000px) {
        justify-content: center;
        
        section:nth-child(1) {
          justify-content: center;
        }

        section:nth-child(2) {
          display: none;
          margin-left:unset;
        }
    }
`